import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkButton } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Projeto
