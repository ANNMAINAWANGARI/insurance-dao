// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract InsurancePolicy {
    struct Insurance {
        uint insuranceId;
        address owner;//msg.sender
        uint coverage;//amount
        uint256 premium;//basic|enterprise|premium
        uint expirationDate;
        uint lastPaymentTimestamp;
    }
    struct InsuranceClaim{
        uint insuranceId;
        uint insuranceClaimId;
        uint256 amount;
        address claimer;
        bool claimed;
        string evidence;
    }
    mapping(uint => Insurance) public insurances;
    mapping(uint =>InsuranceClaim) public insurancesClaim;
    uint public insuranceCount;

    function createInsurance(uint256 coverage, uint256 premium) public payable {
        (bool sent, bytes memory data) = address(this).call{value: coverage}("");
        require(sent, "Failed to send XTZ");
        uint insuranceId = insuranceCount++;
        uint expirationDate = block.timestamp + 365 days;
        insurances[insuranceId] = Insurance(insuranceId, msg.sender, coverage, premium, expirationDate,block.timestamp);
    }
    function updatePolicy(uint insuranceId, uint256 coverage, uint256 premium) public {
        require(insurances[insuranceId].owner == msg.sender, "Only the insurance owner can update the insurance");
        insurances[insuranceId].coverage = coverage;
        insurances[insuranceId].premium = premium;
        insurances[insuranceId].expirationDate = block.timestamp + 365 days;
        insurances[insuranceId].lastPaymentTimestamp = block.timestamp;
    }

    function cancelPolicy(uint insuranceId) public {
        require(insurances[insuranceId].owner == msg.sender, "Only the insurance owner can cancel the insurance");
        insurances[insuranceId] = Insurance(0, address(0), 0, 0, 0,0);
    }
    function renew(uint insuranceId, uint256 amount,uint256 premium) public payable{
        require(insurances[insuranceId].expirationDate==block.timestamp,'Insurance period is not over yet');
        require(insurances[insuranceId].owner == msg.sender,'Only the insurance owner can renew the insurance');
        (bool sent, bytes memory data) = address(this).call{value: amount}("");
        require(sent, "Failed to send XTZ");
        insurances[insuranceId].coverage = amount;
        insurances[insuranceId].premium = premium;
        insurances[insuranceId].expirationDate = block.timestamp + 365 days;
        insurances[insuranceId].lastPaymentTimestamp = block.timestamp;
    }
    function createClaim(uint insuranceId, uint256 claim_amount,string memory _evidence) public{
        require(insurances[insuranceId].owner ==msg.sender,'Only the insurance owner can create a claim');
        uint insuranceClaimId = insuranceId;
        insurancesClaim[insuranceClaimId] = InsuranceClaim(insuranceId, insuranceClaimId, claim_amount, msg.sender, false, _evidence);

    }
}