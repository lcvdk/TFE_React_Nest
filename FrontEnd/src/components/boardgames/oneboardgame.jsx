const OneBoardGame = () =>{


  useEffect(()=> {
    axios.get(`http://localhost:5000/api/boardgames/`) // get + url
    .then((res) => {  // response
      setGames(res.data) // setGames change games avec les datas de la response
    })
  },[])


  return(
    <>

    </>
  )
}

export default OneBoardGame