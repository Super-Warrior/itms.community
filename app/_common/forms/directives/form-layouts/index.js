export default (app) => {

  require('./smartCheckoutForm')(app);
  require('./smartCommentForm')(app);
  require('./smartContactsForm')(app);
  require('./smartOrderForm')(app);
  require('./smartRegistrationForm')(app);
  require('./smartReviewForm')(app);
}
