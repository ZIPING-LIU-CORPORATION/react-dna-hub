export default function returnId(){

    const url = window.location.hostname;

    switch(url){

        case 'localhost':
            return 'dd8dae076382451286b9a528017f57bd';
        case 'ziping.dev':
            return '2aeb65914ea244cd85c16b60ca3b688d';

        case 'ziping.life':
            return '2daf6038d0f1447fb9dd17988e93b5b8';

        case 'ziping.org':
            return '312487a25a5b4c0d845f6d93e8103c32';

        case 'awsuni.com':
            return '50d3f2b88101430f8da3006527dcdf78';

        case 'twitterliu.com':
            return 'ac52e99ebc8242e9bf85ecb55444f726';

        default:
            return 'dd8dae076382451286b9a528017f57bd';
    }
}