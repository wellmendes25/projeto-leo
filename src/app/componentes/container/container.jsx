import estilos from './container.module.css'

export default function Container(props){
    return(
        
            <div className={estilos.container}>
                {props.children}
            </div>
      
    )
}