
import { Button } from "../../components/ui/Button/Button"

export const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;
  const cFilters = filters.map(filter => {
    return <Button 
      key={filter} 
      btnName={filter}
      className={filter == selected ? 'btn_filter selected' : 'btn_filter'} 
      click={() => { onSelectFilter(filter); }
    }/>
  });

  return (
    <div className="toolbar">{cFilters}</div>
  )
}