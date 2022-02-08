import firestore from '@react-native-firebase/firestore';
export function uploadData (title,store,menu,description)
const UploadCollection = firestore().collection('Upload');
{ 
  const data={
  Title: title,
  Store:store,
  Menu:menu,
  Descript:description,
  Created:Date()
}
 UploadCollection.doc().set(data);

   navigation.navigate('Home');
   onChangeTextTitle('');
   onChangeTextStore('');
   onChangeTextMenu('');
   onChangeTextDescription('');
}  // firestore 데이터 올리기