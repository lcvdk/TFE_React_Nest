import { Form, FormCheck } from "react-bootstrap";

const CheckBox = ()=> {


return(
  <Form>
    <Form.Group>
        <FormCheck  type="checkbox" value="" />
    </Form.Group>
  </Form>

)

}

export default CheckBox;

{/* <fieldset class="form-group">
      <legend class="mt-4">Switches</legend>
      <div class="form-check form-switch">
        <input class="form-check-input"  >
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
        <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
      </div>
    </fieldset> */}