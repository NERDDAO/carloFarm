import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  8453: {
    bonsai721NFT: {
      address: "0xE9d2FA815B95A9d087862a09079549F351DaB9bd",
      abi: [
        {
          inputs: [{ internalType: "address", name: "deployer", type: "address" }],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyLinked", type: "error" },
        { inputs: [], name: "CannotLink", type: "error" },
        { inputs: [], name: "NotLinked", type: "error" },
        { inputs: [], name: "SenderNotBase", type: "error" },
        { inputs: [], name: "SenderNotDeployer", type: "error" },
        { inputs: [], name: "TransferToNonERC721ReceiverImplementer", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "account", type: "address" },
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "operator", type: "address" },
            { indexed: false, internalType: "bool", name: "isApproved", type: "bool" },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "baseERC20",
          outputs: [{ internalType: "address", name: "base", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "result", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "result", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },
    uniV3NFTTokenABI: {
      address: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
      abi: [
        {
          inputs: [
            { internalType: "address", name: "_factory", type: "address" },
            { internalType: "address", name: "_WETH9", type: "address" },
            { internalType: "address", name: "_tokenDescriptor_", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "approved", type: "address" },
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "operator", type: "address" },
            { indexed: false, internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
            { indexed: false, internalType: "address", name: "recipient", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          name: "Collect",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
            { indexed: false, internalType: "uint128", name: "liquidity", type: "uint128" },
            { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          name: "DecreaseLiquidity",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
            { indexed: false, internalType: "uint128", name: "liquidity", type: "uint128" },
            { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          name: "IncreaseLiquidity",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: true, internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "WETH9",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "approve",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "baseURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "burn",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint128", name: "amount0Max", type: "uint128" },
                { internalType: "uint128", name: "amount1Max", type: "uint128" },
              ],
              internalType: "struct INonfungiblePositionManager.CollectParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "collect",
          outputs: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "token0", type: "address" },
            { internalType: "address", name: "token1", type: "address" },
            { internalType: "uint24", name: "fee", type: "uint24" },
            { internalType: "uint160", name: "sqrtPriceX96", type: "uint160" },
          ],
          name: "createAndInitializePoolIfNecessary",
          outputs: [{ internalType: "address", name: "pool", type: "address" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
                { internalType: "uint128", name: "liquidity", type: "uint128" },
                { internalType: "uint256", name: "amount0Min", type: "uint256" },
                { internalType: "uint256", name: "amount1Min", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
              ],
              internalType: "struct INonfungiblePositionManager.DecreaseLiquidityParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "decreaseLiquidity",
          outputs: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "factory",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "getApproved",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "uint256", name: "tokenId", type: "uint256" },
                { internalType: "uint256", name: "amount0Desired", type: "uint256" },
                { internalType: "uint256", name: "amount1Desired", type: "uint256" },
                { internalType: "uint256", name: "amount0Min", type: "uint256" },
                { internalType: "uint256", name: "amount1Min", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
              ],
              internalType: "struct INonfungiblePositionManager.IncreaseLiquidityParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "increaseLiquidity",
          outputs: [
            { internalType: "uint128", name: "liquidity", type: "uint128" },
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "address", name: "token0", type: "address" },
                { internalType: "address", name: "token1", type: "address" },
                { internalType: "uint24", name: "fee", type: "uint24" },
                { internalType: "int24", name: "tickLower", type: "int24" },
                { internalType: "int24", name: "tickUpper", type: "int24" },
                { internalType: "uint256", name: "amount0Desired", type: "uint256" },
                { internalType: "uint256", name: "amount1Desired", type: "uint256" },
                { internalType: "uint256", name: "amount0Min", type: "uint256" },
                { internalType: "uint256", name: "amount1Min", type: "uint256" },
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
              ],
              internalType: "struct INonfungiblePositionManager.MintParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "mint",
          outputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint128", name: "liquidity", type: "uint128" },
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
          name: "multicall",
          outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "positions",
          outputs: [
            { internalType: "uint96", name: "nonce", type: "uint96" },
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "address", name: "token0", type: "address" },
            { internalType: "address", name: "token1", type: "address" },
            { internalType: "uint24", name: "fee", type: "uint24" },
            { internalType: "int24", name: "tickLower", type: "int24" },
            { internalType: "int24", name: "tickUpper", type: "int24" },
            { internalType: "uint128", name: "liquidity", type: "uint128" },
            { internalType: "uint256", name: "feeGrowthInside0LastX128", type: "uint256" },
            { internalType: "uint256", name: "feeGrowthInside1LastX128", type: "uint256" },
            { internalType: "uint128", name: "tokensOwed0", type: "uint128" },
            { internalType: "uint128", name: "tokensOwed1", type: "uint128" },
          ],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "refundETH", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "selfPermit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "selfPermitAllowed",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "selfPermitAllowedIfNecessary",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "selfPermitIfNecessary",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "amountMinimum", type: "uint256" },
            { internalType: "address", name: "recipient", type: "address" },
          ],
          name: "sweepToken",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
          name: "tokenByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "tokenOfOwnerByIndex",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amount0Owed", type: "uint256" },
            { internalType: "uint256", name: "amount1Owed", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "uniswapV3MintCallback",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "amountMinimum", type: "uint256" },
            { internalType: "address", name: "recipient", type: "address" },
          ],
          name: "unwrapWETH9",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },
    fcknToken: {
      address: "0x38d513Ec43ddA20f323f26c7bef74c5cF80b6477",
      abi: [
        {
          inputs: [
            { internalType: "uint96", name: "initialTokenSupply", type: "uint96" },
            { internalType: "address", name: "initialSupplyOwner", type: "address" },
            { internalType: "uint96", name: "tokensPerNft", type: "uint96" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "DNAlreadyInitialized", type: "error" },
        { inputs: [], name: "InsufficientAllowance", type: "error" },
        { inputs: [], name: "InsufficientBalance", type: "error" },
        { inputs: [], name: "LinkMirrorContractFailed", type: "error" },
        { inputs: [], name: "MirrorAddressIsZero", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "SenderNotMirror", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TotalSupplyOverflow", type: "error" },
        { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "ZeroTokensPerNft", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "oldOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "target", type: "address" },
            { indexed: false, internalType: "bool", name: "status", type: "bool" },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "cancelOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "getSkipNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirror",
          outputs: [{ internalType: "contract DN404Mirror", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "ownershipHandoverExpiresAt",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "payable", type: "function" },
        { inputs: [], name: "requestOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "baseURI_", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "skipNFT", type: "bool" }],
          name: "setSkipNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },
    "$Carlo/$WETH": {
      address: "0x53f64cde28dd3caef17e701593b4ad7a95f0f61c",
      abi: [
        {
          inputs: [
            { internalType: "uint96", name: "initialTokenSupply", type: "uint96" },
            { internalType: "address", name: "initialSupplyOwner", type: "address" },
            { internalType: "uint96", name: "tokensPerNft", type: "uint96" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "DNAlreadyInitialized", type: "error" },
        { inputs: [], name: "InsufficientAllowance", type: "error" },
        { inputs: [], name: "InsufficientBalance", type: "error" },
        { inputs: [], name: "LinkMirrorContractFailed", type: "error" },
        { inputs: [], name: "MirrorAddressIsZero", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "SenderNotMirror", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TotalSupplyOverflow", type: "error" },
        { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "ZeroTokensPerNft", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "oldOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "target", type: "address" },
            { indexed: false, internalType: "bool", name: "status", type: "bool" },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "cancelOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "getSkipNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirror",
          outputs: [{ internalType: "contract DN404Mirror", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "ownershipHandoverExpiresAt",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "payable", type: "function" },
        { inputs: [], name: "requestOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "baseURI_", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "skipNFT", type: "bool" }],
          name: "setSkipNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },

    "$FCKN/$DEGEN": {
      address: "0x0b1174Bdf13057B7b31D7a3cb5EEe186F33b4107",
      abi: [
        {
          inputs: [
            { internalType: "uint96", name: "initialTokenSupply", type: "uint96" },
            { internalType: "address", name: "initialSupplyOwner", type: "address" },
            { internalType: "uint96", name: "tokensPerNft", type: "uint96" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        { inputs: [], name: "AlreadyInitialized", type: "error" },
        { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "DNAlreadyInitialized", type: "error" },
        { inputs: [], name: "InsufficientAllowance", type: "error" },
        { inputs: [], name: "InsufficientBalance", type: "error" },
        { inputs: [], name: "LinkMirrorContractFailed", type: "error" },
        { inputs: [], name: "MirrorAddressIsZero", type: "error" },
        { inputs: [], name: "NewOwnerIsZeroAddress", type: "error" },
        { inputs: [], name: "NoHandoverRequest", type: "error" },
        { inputs: [], name: "SenderNotMirror", type: "error" },
        { inputs: [], name: "TokenDoesNotExist", type: "error" },
        { inputs: [], name: "TotalSupplyOverflow", type: "error" },
        { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
        { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
        { inputs: [], name: "TransferToZeroAddress", type: "error" },
        { inputs: [], name: "Unauthorized", type: "error" },
        { inputs: [], name: "ZeroTokensPerNft", type: "error" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverCanceled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [{ indexed: true, internalType: "address", name: "pendingOwner", type: "address" }],
          name: "OwnershipHandoverRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "oldOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "target", type: "address" },
            { indexed: false, internalType: "bool", name: "status", type: "bool" },
          ],
          name: "SkipNFTSet",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        { stateMutability: "payable", type: "fallback" },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "cancelOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "completeOwnershipHandover",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "a", type: "address" }],
          name: "getSkipNFT",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirror",
          outputs: [{ internalType: "contract DN404Mirror", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mirrorERC721",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "result", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "pendingOwner", type: "address" }],
          name: "ownershipHandoverExpiresAt",
          outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "payable", type: "function" },
        { inputs: [], name: "requestOwnershipHandover", outputs: [], stateMutability: "payable", type: "function" },
        {
          inputs: [{ internalType: "string", name: "baseURI_", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "bool", name: "skipNFT", type: "bool" }],
          name: "setSkipNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "result", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        { stateMutability: "payable", type: "receive" },
      ],
    },
    xStakingPool: {
      address: "0x6901d3A45dc3e4E79f5eDd60ABE57C35feBB8005",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "", type: "address", internalType: "address" },
            { name: "", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "currentUnlockEndTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "distributeReward",
          inputs: [{ name: "rewardAmount", type: "uint128", internalType: "uint128" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getPricePerFullShare",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [{ name: "initialOwner", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastRewardAmount",
          inputs: [],
          outputs: [{ name: "", type: "uint128", internalType: "uint128" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastRewardTimestamp",
          inputs: [],
          outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [{ name: "data", type: "bytes[]", internalType: "bytes[]" }],
          outputs: [{ name: "results", type: "bytes[]", internalType: "bytes[]" }],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            { name: "token", type: "address", internalType: "contract ERC20" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            { name: "token", type: "address", internalType: "contract ERC20" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            { name: "rewardDistributor", type: "address", internalType: "address" },
            { name: "isRewardDistributor_", type: "bool", internalType: "bool" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [{ name: "stakeTokenAmount", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "xERC20Amount", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC20" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [{ name: "xERC20Amount", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "stakeTokenAmount", type: "uint256", internalType: "uint256" }],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            { name: "owner", type: "address", indexed: true, internalType: "address" },
            { name: "spender", type: "address", indexed: true, internalType: "address" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            { name: "previousOwner", type: "address", indexed: true, internalType: "address" },
            { name: "newOwner", type: "address", indexed: true, internalType: "address" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [{ name: "reward", type: "uint128", indexed: false, internalType: "uint128" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            { name: "user", type: "address", indexed: true, internalType: "address" },
            { name: "stakeTokenAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "xERC20Amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            { name: "from", type: "address", indexed: true, internalType: "address" },
            { name: "to", type: "address", indexed: true, internalType: "address" },
            { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            { name: "user", type: "address", indexed: true, internalType: "address" },
            { name: "stakeTokenAmount", type: "uint256", indexed: false, internalType: "uint256" },
            { name: "xERC20Amount", type: "uint256", indexed: false, internalType: "uint256" },
          ],
          anonymous: false,
        },
        { type: "error", name: "Error_AlreadyInitialized", inputs: [] },
        { type: "error", name: "Error_NotRewardDistributor", inputs: [] },
        { type: "error", name: "Error_ZeroOwner", inputs: [] },
        { type: "error", name: "Error_ZeroSupply", inputs: [] },
        { type: "error", name: "Ownable_NewOwnerZeroAddress", inputs: [] },
        { type: "error", name: "Ownable_NotOwner", inputs: [] },
      ],
    },

    wethStakingPool: {
      address: "0x3FdC7fEf77208Aaac44E81bA982a9855642411D2",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [
            {
              name: "data",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          outputs: [
            {
              name: "results",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },
    degenStakingPool: {
      address: "0xcF9ccEF568228831CBed0C5b5fB961Ba70e833F1",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "multicall",
          inputs: [
            {
              name: "data",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          outputs: [
            {
              name: "results",
              type: "bytes[]",
              internalType: "bytes[]",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "selfPermit",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "selfPermitIfNecessary",
          inputs: [
            {
              name: "token",
              type: "address",
              internalType: "contract ERC20",
            },
            {
              name: "value",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "deadline",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "v",
              type: "uint8",
              internalType: "uint8",
            },
            {
              name: "r",
              type: "bytes32",
              internalType: "bytes32",
            },
            {
              name: "s",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },

    erc721StakingPool: {
      address: "0x15d26A820A541f0555e4A8E21273460eD982B828",
      abi: [
        {
          type: "function",
          name: "DURATION",
          inputs: [],
          outputs: [
            {
              name: "DURATION_",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "earned",
          inputs: [
            {
              name: "account",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "exit",
          inputs: [
            {
              name: "idList",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getReward",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "initialOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "isRewardDistributor",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastTimeRewardApplicable",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lastUpdateTime",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "notifyRewardAmount",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "onERC721Received",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "ownerOf",
          inputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "periodFinish",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint64",
              internalType: "uint64",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerToken",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardPerTokenStored",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardRate",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "rewardToken",
          inputs: [],
          outputs: [
            {
              name: "rewardToken_",
              type: "address",
              internalType: "contract ERC20",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "rewards",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setRewardDistributor",
          inputs: [
            {
              name: "rewardDistributor",
              type: "address",
              internalType: "address",
            },
            {
              name: "isRewardDistributor_",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stake",
          inputs: [
            {
              name: "idList",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "stakeToken",
          inputs: [],
          outputs: [
            {
              name: "stakeToken_",
              type: "address",
              internalType: "contract ERC721",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "userRewardPerTokenPaid",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "withdraw",
          inputs: [
            {
              name: "idList",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardAdded",
          inputs: [
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RewardPaid",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "reward",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Staked",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "idList",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Withdrawn",
          inputs: [
            {
              name: "user",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "idList",
              type: "uint256[]",
              indexed: false,
              internalType: "uint256[]",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "Error_AlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_AmountTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotRewardDistributor",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotStakeToken",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_NotTokenOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Error_ZeroOwner",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NewOwnerZeroAddress",
          inputs: [],
        },
        {
          type: "error",
          name: "Ownable_NotOwner",
          inputs: [],
        },
      ],
    },
    stakingContractFactory: {
      address: "0x07FA8B1E3E39a0ECF313E748bf240C003261b1ED",
      abi: [
        {
          type: "constructor",
          inputs: [
            { name: "xERC20Implementation_", type: "address", internalType: "contract xERC20" },
            { name: "erc20StakingPoolImplementation_", type: "address", internalType: "contract ERC20StakingPool" },
            { name: "erc721StakingPoolImplementation_", type: "address", internalType: "contract ERC721StakingPool" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createERC20StakingPool",
          inputs: [
            { name: "rewardToken", type: "address", internalType: "contract ERC20" },
            { name: "stakeToken", type: "address", internalType: "contract ERC20" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract ERC20StakingPool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createERC721StakingPool",
          inputs: [
            { name: "rewardToken", type: "address", internalType: "contract ERC20" },
            { name: "stakeToken", type: "address", internalType: "contract ERC721" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract ERC721StakingPool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "createXERC20",
          inputs: [
            { name: "name", type: "bytes32", internalType: "bytes32" },
            { name: "symbol", type: "bytes32", internalType: "bytes32" },
            { name: "decimals", type: "uint8", internalType: "uint8" },
            { name: "stakeToken", type: "address", internalType: "contract ERC20" },
            { name: "DURATION", type: "uint64", internalType: "uint64" },
          ],
          outputs: [{ name: "stakingPool", type: "address", internalType: "contract xERC20" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "erc20StakingPoolImplementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC20StakingPool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "erc721StakingPoolImplementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract ERC721StakingPool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "xERC20Implementation",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "contract xERC20" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "CreateERC20StakingPool",
          inputs: [{ name: "stakingPool", type: "address", indexed: false, internalType: "contract ERC20StakingPool" }],
          anonymous: false,
        },
        {
          type: "event",
          name: "CreateERC721StakingPool",
          inputs: [
            { name: "stakingPool", type: "address", indexed: false, internalType: "contract ERC721StakingPool" },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "CreateXERC20",
          inputs: [{ name: "stakingPool", type: "address", indexed: false, internalType: "contract xERC20" }],
          anonymous: false,
        },
        { type: "error", name: "CreateFail", inputs: [] },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
