// 🔥 Custom Cursor Effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const trail = document.createElement('div');
trail.classList.add('cursor-trail');
document.body.appendChild(trail);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
});

// 🔥 Floating Particles Effect
const particlesContainer = document.createElement('div');
particlesContainer.classList.add('particles');
document.body.appendChild(particlesContainer);

for (let i = 0; i < 30; i++) {
  let particle = document.createElement('div');
  particle.style.width = "5px";
  particle.style.height = "5px";
  particle.style.background = "rgba(0, 255, 255, 0.5)";
  particle.style.position = "absolute";
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.borderRadius = "50%";
  particle.style.animation = `moveParticle ${3 + Math.random() * 5}s infinite linear`;
  particlesContainer.appendChild(particle);
}

// 🔥 NFT Scrolling Carousel
const nftImages = Array.from({ length: 30 }, (_, i) => `https://via.placeholder.com/200?text=NFT+${i + 1}`);
const carousel = document.getElementById("nftCarousel");

function loadNFTImages() {
  carousel.innerHTML = "";
  const totalImages = nftImages.length * 2;
  for (let i = 0; i < totalImages; i++) {
    let img = document.createElement("img");
    img.src = nftImages[i % nftImages.length];
    carousel.appendChild(img);
  }
}
loadNFTImages();

// Infinite scrolling
setInterval(() => {
  carousel.scrollLeft += 1;
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  }
}, 30);

// 🔥 Token Scrolling Display (Now Auto-Scrolling!)
const tokenData = [
  { name: "MoonToken", symbol: "MOON", description: "A token for intergalactic traders.", image: "https://via.placeholder.com/100" },
  { name: "DogeBoost", symbol: "DOGE", description: "Powered by memes and rockets.", image: "https://via.placeholder.com/100" },
  { name: "GigaToken", symbol: "GIGA", description: "Biggest brain in the crypto world.", image: "https://via.placeholder.com/100" }
];

let currentIndex = 0;
const tokenName = document.getElementById("tokenName");
const tokenDescription = document.getElementById("tokenDescription");
const tokenImage = document.getElementById("tokenImage");
const prevToken = document.getElementById("prevToken");
const nextToken = document.getElementById("nextToken");

function updateTokenDisplay(index) {
  const token = tokenData[index];
  tokenName.innerHTML = `${token.name} (${token.symbol})`;
  tokenDescription.innerHTML = token.description;
  tokenImage.src = token.image;
}
updateTokenDisplay(currentIndex);

// Manual scrolling
prevToken.onclick = () => { 
  currentIndex = (currentIndex - 1 + tokenData.length) % tokenData.length; 
  updateTokenDisplay(currentIndex); 
};

nextToken.onclick = () => { 
  currentIndex = (currentIndex + 1) % tokenData.length; 
  updateTokenDisplay(currentIndex); 
};

// **Auto-Scrolling Tokens**
setInterval(() => {
  currentIndex = (currentIndex + 1) % tokenData.length;
  updateTokenDisplay(currentIndex);
}, 5000); // Scrolls every 5 seconds

// Restore Button Functionality
let connectButton = document.getElementById("connectButton");
let mintButton = document.getElementById("mintButton");
let claimButton = document.getElementById("claimButton");

const mintContractAddress = "0x037020477608F28daDb59396372093e4Ef7cE423";  // Minting contract
const airdropContractAddress = "0xb81302Eb4808801B7187273c53ad7F179da62078";  // Airdrop contract

const mintAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_MINT_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_TOKENS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"payable","type":"function"}];  // Minting contract ABI
const airdropAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newTokenAddress",
				"type": "address"
			}
		],
		"name": "changeToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_dropper",
				"type": "address"
			}
		],
		"name": "changeVerification",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "dropAmountChange",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDrop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_dropAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferDrop",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "dropAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "verification",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];  // airdrop ABI 



async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
      try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []); // Request wallet access
          const signer = provider.getSigner();
          const userAddress = await signer.getAddress();

          // Ensure walletAddress element exists
          const walletDisplay = document.getElementById("walletAddress");
          if (!walletDisplay) {
              console.warn("⚠️ Element #walletAddress not found in the HTML.");
              return;
          }

          walletDisplay.innerText = `Connected: ${userAddress}`;
          console.log("✅ Wallet Connected:", userAddress);
          alert(`Wallet connected: ${userAddress}`);
      } catch (error) {
          console.error("❌ Wallet Connection Error:", error);
          alert("Failed to connect wallet. Check console for details.");
      }
  } else {
      alert("❌ MetaMask is not installed. Please install MetaMask.");
  }
}

// Attach event listener to the button
document.getElementById("connectButton").addEventListener("click", connectWallet);



// Attach event listener to connect button
document.getElementById("connectButton").addEventListener("click", connectWallet);


document.getElementById("connectButton").addEventListener("click", connectWallet);

// Mint NFT
async function mintNFT() {
    if (!window.ethereum) return alert("MetaMask is required.");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(mintContractAddress, mintAbi, signer);

    try {
        const price = ethers.BigNumber.from("100"); // 
        const tx = await contract.mint(1, { value: price });
        await tx.wait();
        alert("NFT Minted Successfully!");
    } catch (error) {
        console.error("Minting error:", error);
        alert("Minting failed. Ensure sale is active and you have enough ETH.");
    }
}

document.getElementById("mintButton").addEventListener("click", mintNFT);

async function claimAirdrop() {
  if (!window.ethereum) return alert("MetaMask is required.");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const airdropContract = new ethers.Contract(airdropContractAddress, airdropAbi, signer);

  try {
      const tx = await airdropContract.getDrop();
      await tx.wait();
      alert("Airdrop Claimed Successfully!");
  } catch (error) {
      console.error("Airdrop claim error:", error);
      alert("Airdrop claim failed.");
  }
}



document.getElementById("claimButton").addEventListener("click", claimAirdrop);
