import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export const contractAddress = "0xDDb66D5d7443Caf865FfD0A724684a358556F8C6";
export const tokenAddress = "0x9185Cabddc9E9D4847FDAa9B1b3f635038F90b5b";

export const contract = getContract({
    client: client,
    chain: baseSepolia,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: baseSepolia,
    address: tokenAddress
});