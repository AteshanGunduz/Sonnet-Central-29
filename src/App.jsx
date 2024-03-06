import { useState, useRef, useContext } from 'react'
import sonnetsData from './data/sonnetsData'
import Header from './components/Header'
import './styles.css'
import UserContext from './state/useContext'
export default function App() {
  const inputRef = useRef()
  const [searchInput, setSearchInput] = useState('')

  const [getData, setGetDatas] = useState(sonnetsData)
  const [datas, setDatas] = useState("")
  const [numbers, setNumbers] = useState("")

  // const {value} = useContext(UserContext)


  function handleClick() {
    setSearchInput(inputRef.current.value.trim());
  
    const linesOfData = getData.map((get) => get.lines);
    const numerOfData = getData.map((get) => get.number);
  
    const allLines = [].concat(...linesOfData);
  
    const filteredData = allLines.filter((line) => line.includes(searchInput));

    const matchingNumbers = numerOfData.filter((number, index) => {
      return linesOfData[index].some((line) => line.includes(searchInput));
    });
   
   setNumbers(matchingNumbers)
    setDatas(filteredData);
  }

  console.log(datas);
  console.log(searchInput);


  /* Challenge

  Kullanıcı " Arama " butonuna tıkladığında, input alanına yazdığı metin searchInput state'inin değeri olur (bu kod zaten yazılmıştı).    
 1. SonnetsData array'indeki satırlarından birinde searchInput değerini içeren her bir sonnet için "sonnets-container" div'inde className'i "sonnet" olan bir div oluşturun (satır 27). 
    
    2. "sonnet" div'inde, sonenin number özelliğini bir <h3> öğesinin metin içeriği olarak ekleyin ve ardından lines özelliğinden/dizisinden sonenin *her* satırını bir <p> öğesinin text içeriği olarak ekleyin, böylece sonenin her satırı için bir <p> elde edin. 
       
    3. "Love", "summer", "winter" ve "strange" gibi yaygın sözcüklerin yanı sıra "hello" ve "weird" gibi hiçbir sonede geçmeyen sözcükleri arayarak kodunuzu test edin.
*/

  return (
    <div className='wrapper'>
      <Header searchProps={{ inputRef, handleClick }} />

      <div className='sonnets-container'>
      {datas === "" ? (<div>Alas, thy search hath yielded no results</div>) : (<div> {datas.map((data, index)=>{
            return    <div className="sonnet" key={index}>
               <h3>{numbers[index]}</h3>
              <p>{data}</p>
            </div>
          })}
        </div>)}
      </div>
    </div>
  )
}

/*Bonus Challenges
      
    - Arama sonucu yoksa, "sonnets-container" div'inde "Alas, thy search hath yielded no results" yazan bir <p> öğesi oluşturun. <p> öğesine "no-results-message" şeklinde bir className verin. 
      
    - Sonuçlar varsa, sonedeki searchInput değeriyle eşleşen her kelimenin etrafına bir <span> koyun. Böylece kelime otomatik olarak vurgulanacaktır (CSS zaten ayarlanmıştır). 
*/
