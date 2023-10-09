// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function symbol() external view returns (string memory);
}

contract ERC20BalanceChecker {
    // Check the balance and symbol of a given ERC20 token
    function checkBalance(address user, address tokenAddress) external view returns (uint256 balance, string memory tokenSymbol) {
        IERC20 token = IERC20(tokenAddress);
        balance = token.balanceOf(user);
        tokenSymbol = token.symbol();
    }
}
