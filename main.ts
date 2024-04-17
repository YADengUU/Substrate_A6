import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";
import '@polkadot/api-augment';
import type { FrameSystemAccountInfo } from "@polkadot/types/lookup";
import { KeyringPair} from '@polkadot/keyring/types';

const sleep = (ms: number) => new Promise(r => setTimeout(r,ms));

const WEB_SOCKET = 'ws://127.0.0.1:9944';
const connect = async() => {
    const wsProvider = new WsProvider(WEB_SOCKET);
    const api = await ApiPromise.create({provider: wsProvider, types: {}});
    await api.isReady;
    return api;
}


// This part is for coursework: 
//  need to print out the updated 'Something' value and 'SomethingStored' event in pallet
//   note: Something could be a storage item storing a piece of data
//       and SomethingStored could be an event emitted when the data is stored/updated
const subscribe_something = async(api:ApiPromise) => {
    await api.query.templateModule.something((sth: number) => {
        console.log(`The update of 'something': ${sth}`);
    });
}

// for event just use the same as in lecture demo
const subscribe_event = async(api: ApiPromise) => {
    await api.query.system.events((events: any[]) => {
        events.forEach( function (event){
            console.log('index', event['event']['index'].toHuman());
            console.log('data', event['event']['data'].toHuman());
        });
    });
}

const main = async() => {
    const api = await connect();
    //const keyring = new Keyring({type: 'sr25519'});
    //const alice = keyring.addFromUri('//Alice');
    //const bob = keyring.addFromUri('//Bob');
    await subscribe_something(api);
    await subscribe_event(api);

    await sleep(500000);
    console.log('main function');
}


main()
.then(() => {
    console.log('exits with success');
    process.exit(0);
})
.catch(err => {
    console.log('error is ', err);
    process.exit(1);
})

/*
// these are just the lecture examples
const getMetadata = async(api: ApiPromise) => {
    const metadata = await api.rpc.state.getMetadata();
    return metadata.toString();
}

const subscribe_account = async(api: ApiPromise, address: string) => {
    await api.query.system.account(address, aliceInfo => {
        const free = aliceInfo.data.free;
        console.log('free balance is: ', free.toHuman());
    })
}

const getConst = async (api: ApiPromise) => {
    const existentialDeposit = await api.consts.balances.existentialDeposit.toHuman();
    return existentialDeposit;
}

const getFreeBalance = async (api:ApiPromise, address: string)=>{
    const { data: {free, }, }: FrameSystemAccountInfo = await
        api.query.system.account(address);
    return free;
}

const transfer = async(api: ApiPromise, alice: KeyringPair, bob: string, amount: number) =>{
    await api.tx.balances.transfer(bob, amount)
    .signAndSend(alice, res => {
        console.log('Tx status: ${res.status}');
    });
}
*/