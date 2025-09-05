import React from 'react';

function SubscribeForm({ className = '', inputClassName = '', buttonClassName = '' }) {
  return (
    <form
      action="https://joyceyujeanlee.us12.list-manage.com/subscribe/post?u=9a0599467edb506239b6ed989&id=a007452c99&f_id=0037bce2f0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className={`validate ${className}`}
      target="_self"
    >
      <div className="flex items-center w-full">
        <input
          type="email"
          name="EMAIL"
          data-lpignore="true"
          id="mce-EMAIL"
          placeholder="Email 电子邮件"
          className={inputClassName}
        />
        <input
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          value="Submit"
          className={`cursor-pointer ${buttonClassName}`}
        />
      </div>
      <div hidden="">
        <input type="hidden" name="tags" value="12678301" />
      </div>
      <div aria-hidden="true" className="absolute left-[-5000px]">
        <input type="text" name="b_9a0599467edb506239b6ed989_a007452c99" tabIndex="-1" />
      </div>
    </form>
  );
}

export default SubscribeForm;
