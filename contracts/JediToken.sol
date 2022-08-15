// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract JediToken is ERC20 {
    constructor(uint256 initialSupply) ERC20('Jedi', 'JED') {
        _mint(msg.sender, initialSupply);
    }
}
