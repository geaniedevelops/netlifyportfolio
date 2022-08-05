import Navigation from '../elements/Navigation'
import Grid from './main/components/Grid'

export default function AppTemplate(props) {
  return (
    <main className={props.pageName}>
      {props.children}
      <Navigation />
      <Grid />
    </main>
  )
}
