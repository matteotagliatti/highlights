---
type: article
title: My first impressions of web3
author: Moxie Marlinspike
year: 2022
source: https://moxie.org/2022/01/07/web3-first-impressions.html
---

People don’t want to run their own servers, and never will. The premise for web1 was that everyone on the internet would be both a publisher and consumer of content as well as a publisher and consumer of infrastructure. 

A protocol moves much more slowly than a platform. After 30+ years, email is still unencrypted; meanwhile WhatsApp went from unencrypted to full e2ee in a year. People are still trying to standardize sharing a video reliably over IRC; meanwhile, Slack lets you create custom reaction emoji based on your face.

To be clear, there is nothing particularly “distributed” about the apps themselves: they’re just normal react websites. The “distributedness” refers to where the state and the logic/permissions for updating the state lives: on the blockchain instead of in a “centralized” database.

At this point, there are basically two companies. Almost all dApps use either Infura or Alchemy in order to interact with the blockchain. In fact, even when you connect a wallet like MetaMask to a dApp, and the dApp interacts with the blockchain via your wallet, MetaMask is just making calls to Infura!

So much work, energy, and time has gone into creating a trustless distributed consensus mechanism, but virtually all clients that wish to access it do so by simply trusting the outputs from these two companies without any further verification. It also doesn’t seem like the best privacy situation. Imagine if every time you interacted with a website in Chrome, your request first went to Google before being routed to the destination and back. That’s the situation with ethereum today. All write traffic is obviously already public on the blockchain, but these companies also have visibility into almost all read requests from almost all users in almost all dApps.

Instead of storing the data on-chain, NFTs instead contain a URL that points to the data. What surprised me about the standards was that there’s no hash commitment for the data located at the URL. Looking at many of the NFTs on popular marketplaces being sold for tens, hundreds, or millions of dollars, that URL often just points to some VPS running Apache somewhere. Anyone with access to that machine, anyone who buys that domain name in the future, or anyone who compromises that machine can change the image, title, description, etc for the NFT to whatever they’d like at any time (regardless of whether or not they “own” the token). There’s nothing in the NFT spec that tells you what the image “should” be, or even allows you to confirm whether something is the “correct” image.

MetaMask doesn’t actually do much, it’s just a view onto data provided by these centralized APIs.

When you think about it, OpenSea would actually be much “better” in the immediate sense if all the web3 parts were gone. It would be faster, cheaper for everyone, and easier to use. For example, to accept a bid on my NFT, I would have had to pay over $80-$150+ just in ethereum transaction fees. That puts an artificial floor on all bids, since otherwise you’d lose money by accepting a bid for less than the gas fees. Payment fees by credit card, which typically feel extortionary, look cheap compared to that. OpenSea could even publish a simple transparency log if people wanted a public record of transactions, offers, bids, etc to verify their accounting.