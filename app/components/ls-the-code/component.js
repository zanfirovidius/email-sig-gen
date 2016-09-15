import Ember from 'ember';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    new Clipboard('.clipboard');
    Ember.run.scheduleOnce('afterRender', this, () => {
      this.$().find('.clipboard').attr('data-clipboard-target','#toClipboard')
    });
  },

  theCode: Ember.computed('model.name', 'model.jobTitle', 'model.address', 'model.directPhone', 'model.officePhone', 'model.facebook', 'model.twitter', 'model.linkedin', 'model.skype', 'model.googlePlus', 'model.youtube', function() {
    var directPhone = '';
    var officePhone = '';
    var linePhone = '';
    var facebook = '';
    var twitter = '';
    var linkedin = '';
    var skype = '';
    var googlePlus = '';
    var youtube = '';

    if (this.get('model.directPhone')) {
      directPhone = `Direct <a href="tel:`+ this.get('model.directPhone') +`">`+ this.get('model.directPhone') +`</a>`;
    }

    if (this.get('model.officePhone')) {
      officePhone = `Office <a href="tel:`+ this.get('model.officePhone') +`">`+ this.get('model.officePhone') +`</a>`;
    }

    if (this.get('model.officePhone') && this.get('model.directPhone')) {
      linePhone = ` - `;
    }

    if (this.get('model.facebook')) {
      facebook = `
        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">
          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">
        </span>

        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="`+ this.get('model.facebook') +`">
          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="facebook.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Facebook%403x.png" alt="Facebook" height="24" width="24">
        </a>`;
    }

    if (this.get('model.twitter')) {
      twitter = `
        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">
          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">
        </span>

        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="`+ this.get('model.twitter') +`">
          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="twitter.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Twitter%403x.png" alt="Twitter" height="24" width="24">
        </a>`;
    }

    if (this.get('model.linkedin')) {
      linkedin = `
        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">
          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">
        </span>

        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="`+ this.get('model.linkedin') +`">
          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="linkedin.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+LinkedIn%403x.png" alt="Linkedin" height="24" width="24">
        </a>`;
    }

    if (this.get('model.skype')) {
      skype = `
        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">
          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">
        </span>

        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="`+ this.get('model.skype') +`">
          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="skype.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Skype%403x.png" alt="Skype" height="24" width="24">
        </a>`;
    }

    if (this.get('model.googlePlus')) {
      googlePlus = `
        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">
          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">
        </span>

        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="`+ this.get('model.googlePlus') +`">
          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="googlePlus.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Google+Plus%403x.png" alt="GooglePlus" height="24" width="24">
        </a>`;
    }

    if (this.get('model.youtube')) {
      youtube = `
        <span style="white-space: nowrap; display: inline;" class="signature_facebook-sep social-sep">
          <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/spacer.gif" width="8">
        </span>

        <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="`+ this.get('model.youtube') +`">
          <img style="margin-bottom:2px; border:none; display:inline;" data-filename="youtube.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+YouTube+2%403x.png" alt="Youtube" height="24" width="24">
        </a>`;
    }

    return `<p style="font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;">
      <span style="font-weight: bold; font-size: 14px; color: #1491d8; display: inline;" class="txt signature_name-target sig-hide">` + this.get('model.name') + `
      </span>
      <span style="display: inline;" class="email-sep break"><br></span>
      <span style="color: rgb(144, 144, 144); display: inline;" class="txt signature_jobtitle-target sig-hide">
        ` + this.get('model.jobTitle') + `
      </span>
      <span style="display: inline;" class="email-sep break"><br></span>
      <span style="display: inline;" class="email-sep break"><br></span>
    </p>
    <p style="font-family: Helvetica,Arial,sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;">
      <img src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Asset+1.png" alt="" class="sig-logo" height="24" border="0" width="146">
      <span style="display: inline;" class="email-sep break"><br></span>
      <span style="color: rgb(144, 144, 144); display: inline;" class="txt signature_address-target sig-hide">
        ` + this.get('model.address') + `
      </span>
      <span style="display: inline;" class="email-sep break"><br></span>
      <span style="color: rgb(144, 144, 144); display: inline;" class="txt signature_mobilephone-target sig-hide">
        `+ directPhone + linePhone + officePhone +`
      </span>
      <span style="display: inline;" class="address-sep break"><br></span>
      <span style="display: inline;" class="website-sep break"><br></span>
    </p>
    <p class="social-list" style="font-size: 0px; line-height: 0; font-family: Helvetica,Arial,sans-serif;">
      <a style="text-decoration: none; display: inline;" class="social signature_facebook-target sig-hide" href="http://www.stormgroup.net/en/">
        <img style="margin-bottom:2px; border:none; display:inline;" data-filename="stormgroup.png" src="https://s3-eu-west-1.amazonaws.com/storm-action-assets/stormgroup+-+email+signature/Storm+Signature+-+Storm+O%403x.png" alt="Stormgroup" height="24" width="24">
      </a>
      ` + facebook + linkedin + twitter + skype + googlePlus + youtube + `
    </p>
`

  }),

  theCodeForDownload: Ember.computed('theCode', function() {
    return 'data:html/plain;charset=utf-8,' + encodeURIComponent(`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><body>`+this.get('theCode')+`</body></html>`);
  }),


});
