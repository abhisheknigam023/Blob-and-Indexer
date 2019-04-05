module.exports = async function (context, myBlob) {
    console.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    console.log('context  : ',  context.bindingData.name.split('.'));
    if(context.bindingData.name.split('.')[1]=="mp4"){
        console.log('yes: ', context.bindingData.uri);
    }
}
