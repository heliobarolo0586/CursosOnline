import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    <div>
        <Pai nome='Paulo' sobrenome='Silva'>
             {/* como passo os componetes Filhos aqui? */}
             <Filho nome='Pedro ' />
             <Filho nome='Paulo ' sobrenome ='Silva'/>
             <Filho nome ='Carla ' sobrenome ='Silva' /> 
        </Pai>
    </div>
    , document.getElementById('root'))

