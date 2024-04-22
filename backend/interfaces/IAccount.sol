// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;


interface IAccount {
    /// @notice Called by the bootloader to validate that an account agrees to process the transaction
    /// (and potentially pay for it).
    /// @param _txHash The hash of the transaction to be used in the explorer
    /// @param _suggestedSignedHash The hash of the transaction is signed by EOAs
    /// @param _transaction The transaction itself
    /// @return magic The magic value that should be equal to the signature of this function
    /// if the user agrees to proceed with the transaction.
    /// @dev The developer should strive to preserve as many steps as possible both for valid
    /// and invalid transactions as this very method is also used during the gas fee estimation
    /// (without some of the necessary data, e.g. signature).
    function validateTransaction( bytes32 _txHash, bytes32 _suggestedSignedHash, Transaction calldata _transaction) external payable returns (bytes4 magic);
    function executeTransaction(bytes32 _txHash,bytes32 _suggestedSignedHash,Transaction calldata _transaction) external payable;
     // There is no point in providing possible signed hash in the `executeTransactionFromOutside` method,
    // since it typically should not be trusted.
    function executeTransactionFromOutside(Transaction calldata _transaction) external payable;
    function payForTransaction(bytes32 _txHash,bytes32 _suggestedSignedHash,Transaction calldata _transaction) external payable;
    function prepareForPaymaster(bytes32 _txHash,bytes32 _possibleSignedHash,Transaction calldata _transaction) external payable;
    




    event AccountCreated(bytes32 indexed username);
    event LoginSuccessful(bytes32 indexed username);
    event WalletAssociated(bytes32 indexed username, address indexed wallet);
    event PaymasterRegistered(bytes32 indexed username, address indexed paymasterAddress);
    // Account management functions
    function createAccount(bytes32 _username, bytes32 _password) external;
    function login(bytes32 _username, bytes32 _password) external;
    function verifySession(bytes32 _sessionToken) external view returns (bool);
    function sessionExpired(bytes32 _sessionToken) external view returns (bool);
    function associateWallet(bytes32 _username, address _wallet) external;
    function registerPaymaster(bytes32 _username, address _paymasterAddress) external;

    // Transaction execution functions
    function executeTransactionWithPaymaster(
        bytes32 _sessionToken,
        address _to,
        uint256 _value,
        bytes calldata _data,
        bytes calldata _signature,
        uint256 _nonce
    ) external;
}