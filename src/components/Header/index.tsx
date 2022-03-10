import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNreTransactionModal: () => void;
}

export function Header({onOpenNreTransactionModal}: HeaderProps) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNreTransactionModal}>
          Nova transação
        </button>
        
      </Content>
    </Container>
  )
}