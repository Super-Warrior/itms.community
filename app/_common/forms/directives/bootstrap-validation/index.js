export default (app) => {
  require('./bootstrapAttributeForm')(app);
  require('./bootstrapButtonGroupForm')(app);
  require('./bootstrapContactForm')(app);
  require('./bootstrapMovieForm')(app);

  require('./bootstrapProductForm')(app);
  require('./bootstrapProfileForm')(app);
  require('./bootstrapTogglingForm')(app);

}
