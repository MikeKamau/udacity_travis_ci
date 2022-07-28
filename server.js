function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Kubernetes rocks`);
    await sleep(5000);
  }
}

main();
