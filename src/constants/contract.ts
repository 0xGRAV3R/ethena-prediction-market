import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { bleTestnet } from "thirdweb/chains";

export const contractAddress = "0x9aa08D9081221fAC06916164F5A31A225D7101F3";
export const tokenAddress = "0x997edF60A68F8fa5fDF313E205690e0DB7EB4Ba9";

export const contract = getContract({
    client: client,
    chain: bleTestnet,
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: bleTestnet,
    address: tokenAddress
});