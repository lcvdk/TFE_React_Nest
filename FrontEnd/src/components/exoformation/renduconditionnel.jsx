
const RenduCondi = (props) => {

  const { msg, visible, error} =  props

  if(error){
    return (
        <div >
            <h1>Une Erreur est survenue!</h1>
        </div>
    )
  }

return(
  <>
      <div>
          {visible? 
          (
            <h1>{msg || 'Aucun Message'}</h1>
          ) : ( 
                <h1>Element masqué</h1>
              )
          }


      </div>
  </>
)

}

export default RenduCondi;