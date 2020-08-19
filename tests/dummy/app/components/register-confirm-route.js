import Component from '@ember/component';
import layout from '../templates/components/register-confirm-route';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,

  cognito: service(),

  actions: {
    confirm(e) {
      const { username, code } = this;

      e.preventDefault();
      this.cognito.confirmSignUp(username, code).then(() => {
        this.onComplete();
      }).catch((err) => {
        this.set('errorMessage', err.message);
      });
    }
  }
});
