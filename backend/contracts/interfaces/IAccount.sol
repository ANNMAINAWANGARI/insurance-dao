// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "../core/UserOperation.sol";

interface IAccount {
    function validateUserOp(UserOperation calldata userOp, bytes32 userOpHash, uint256 missingAccountFunds)external returns (uint256 validationData);
}