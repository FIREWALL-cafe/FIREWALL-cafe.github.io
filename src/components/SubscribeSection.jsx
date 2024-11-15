
import React from "react";
import SubscribeMailchimp from "../assets/images/subscribe_mailchimp.jpg";

function SubscribeSection() {

  return (
    <div className="flex flex-col px-24 justify-center items-start bg-black self-stretch w-1/2 max-md:max-w-full">
      <div className="flex flex-col max-w-full border-0 border-white border-solid shadow-sm">
        <div className="flex flex-col flex-wrap w-full shadow-sm">
          <div className="flex flex-col mt-5 w-full text-xl text-white">
            <div>
              <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup">
                  <form action="https://joyceyujeanlee.us12.list-manage.com/subscribe/post?u=9a0599467edb506239b6ed989&amp;id=a007452c99&amp;f_id=0037bce2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate bg-black" target="_self">
                    <div id="mc_embed_signup_scroll" className="relative">
                      <h2 className="text-2xl">Subscribe 订阅</h2>
                      <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                      <div className="mc-field-group">
                        <label for="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input type="email" name="EMAIL" data-lpignore='true' className="required email" id="mce-EMAIL" />
                        <span id="mce-EMAIL-HELPERTEXT" className="mt-2 text-sm">Get newsletter updates about upcoming events and information</span>
                      </div>
                      <div hidden="">
                        <input type="hidden" name="tags" value="12678301" />
                      </div>
                      <div id="mce-responses" className="clear foot">
                        <div className="response hidden" id="mce-error-response"></div>
                        <div className="response hidden" id="mce-success-response"></div>
                      </div>
                      <div aria-hidden="true"  className="absolute left-[5000px]">
                          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                          <input type="text" name="b_9a0599467edb506239b6ed989_a007452c99" tabindex="-1" value="" />
                      </div>
                      <div className="optionalParent">
                        <div className="clear foot">
                          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                          <p className="my-auto">
                            <a href="http://eepurl.com/i3XcbM" title="Mailchimp - email marketing made easy and fun">
                              <span className="inline-block bg-transparent rounded">
                                <img className="refferal_badge width: 220px; h-[40px] flex px-2 justify-center items-center" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" />
                              </span>
                            </a>
                            </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;