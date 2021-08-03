// (() => {

//   setInterval(() => {
//     const cpu = document.getElementsByClassName("progress-bar bg-info")
//     const mine = document.getElementsByClassName("btn btn-block btn-primary mb-2")
//     const autoMine = document.getElementById("autoMineCheck")
//     if (parseInt(cpu[0].textContent, 10) < 90 && !mine[0].disabled && mine[0].textContent === 'Mine' && autoMine["checked"]) {
//       mine[0].click()
//     }
//   }, 2000)
// })();
(async () => {
  const checkclaims = setInterval(async () => {
    let BTc = document.getElementsByTagName("button");
    if (BTc[4]) {
      if (BTc[4].textContent == "Mine" && BTc[4].textContent != undefined) {
        let result = await getclaims();
        if (result != undefined) {
          doClaimNFTs();
        }
        clearInterval(checkclaims);
      }
    }
  }, 1 * 1000);

  const getclaims = async () => {
    const haveclaim = await wax.rpc.get_table_rows({
      code: 'm.federation',
      scope: 'm.federation',
      table: 'claims',
      lower_bound: wax.userAccount,
      upper_bound: wax.userAccount
    });
    console.log("getclaims");
    console.log(haveclaim.rows[0]);
    if (haveclaim.rows[0] != undefined) {
      console.log("return");
    }
  };
  async function doClaimNFTs() {
    if (!wax.api) {
      // showMessage('You must login first.', true);
      return false;
    }
    // document.getElementById("minerimage").contentDocument.ks.globalPlay();
    // showMessage('Checking for NFTs...', false);
    try {
      const result = await wax.api.transact({
        actions: [{
          account: 'm.federation',
          name: 'claimnfts',
          authorization: [{
            actor: wax.userAccount,
            permission: 'active',
          }],
          data: {
            miner: wax.userAccount,
          },
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30
      });

      // showMessage('Claim action complete, check your wallet for NFTs. Good Luck.', false);
      // console.log(JSON.stringify(result));
    } catch (e) {
      // showMessage('Claim Failed: ' + e.message, true)
    }
    // document.getElementById("minerimage").contentDocument.ks.globalPause();
  }
})();






// const claim = async (account_name) => {
//   console.log(account_name)
//   fetch('https://wax.greymass.com')
// }