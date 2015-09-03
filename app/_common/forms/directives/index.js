import bootstrapValidation from './bootstrap-validation'
import editors from './editors'
import formLayouts from './form-layouts'
import imageEditor from './image-editor'
import input from './input'
import upload from './upload'
import validate from './validate'
import wizard from './wizard'

export default (app) => {
  bootstrapValidation(app);
  editors(app);
  formLayouts(app);
  imageEditor(app);
  input(app);
  upload(app);
  validate(app);
  wizard(app);
  
}

