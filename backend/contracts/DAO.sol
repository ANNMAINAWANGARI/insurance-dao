// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import './InsurancePolicy.sol';



contract DAO is InsurancePolicy {
    // mapping(address => uint256) public votes;
    mapping(uint => InsuranceClaim) public claims;
    uint public claimCount;
    mapping(address => bool) public members;
    uint public memberCount;
    uint public requiredVotes;
    uint public stakingRequirement;

    event ClaimSubmitted(uint indexed claimId, uint insuranceId, uint256 amount, address claimer, string evidenceURI);
    event ClaimApproved(uint indexed claimId);
    event ClaimRejected(uint indexed claimId);
    event MemberJoined(address indexed member);

    modifier onlyMember() {
        require(members[msg.sender], "Only DAO members can perform this action");
        _;
    }
    constructor(uint _requiredVotes, uint _stakingRequirement) {
        requiredVotes = _requiredVotes;
        stakingRequirement = _stakingRequirement;
    } 
    
    function joinDAO() public payable {
        require(msg.value >= stakingRequirement, "Insufficient stake");
        members[msg.sender] = true;
        memberCount++;
        emit MemberJoined(msg.sender);
    }

    function approveClaim(uint _insuranceClaimId, bool _approved) public {
    require(msg.sender == owner, "Only the contract owner can approve claims");
    require(insurancesClaim[_insuranceClaimId].claimed == false, "Claim has already been processed");
    insurancesClaim[_insuranceClaimId].claimed = _approved;
    if (_approved) {
        (bool sent, bytes memory data) = insurancesClaim[_insuranceClaimId].claimer.call{value: insurancesClaim[_insuranceClaimId].amount}("");
        require(sent, "Failed to send XTZ");
    }
}


    function voteClaim(uint _claimId, bool _vote) public onlyMember {
        InsuranceClaim storage claim = claims[_claimId];
        require(!claim.votes[msg.sender], "You have already voted for this claim");
        claim.votes[msg.sender] = true;
        if (_vote) {
            claim.voteCount++;
        }
        if (claim.voteCount >= requiredVotes) {
            claim.approved = true;
            emit ClaimApproved(_claimId);
        } else if (memberCount - claim.voteCount > memberCount - requiredVotes) {
            emit ClaimRejected(_claimId);
        }
    }

    function isClaimApproved(uint _claimId) public view returns (bool) {
        return InsuranceClaim[_claimId].approved;
    }

    function getClaimDetails(uint _claimId) public view returns (uint, uint, uint256, address, string memory, bool) {
        InsuranceClaim storage claim = claims[_claimId];
        return (claim.claimId, claim.insuranceClaimId, claim.amount, claim.claimer, claim.evidence, claim.approved);
    }

    
}