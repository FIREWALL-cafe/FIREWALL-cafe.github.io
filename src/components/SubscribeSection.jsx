import React from "react";
import SubscribeMailchimp from "../assets/images/subscribe_mailchimp.jpg";

function SubscribeSection() {
  return (
    <div className="flex flex-col w-full p-4 md:p-8 lg:p-12">
      <div className="flex flex-col max-w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col mt-3 md:mt-5 w-full text-base md:text-xl text-white">
            <div>
              <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <div id="mc_embed_signup">
                  <form action="https://joyceyujeanlee.us12.list-manage.com/subscribe/post?u=9a0599467edb506239b6ed989&amp;id=a007452c99&amp;f_id=0037bce2f0" 
                    method="post" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate bg-black p-2 md:p-4" 
                    target="_self"
                  >
                    <div id="mc_embed_signup_scroll" className="relative">
                      <h2 className="text-3xl md:text-4xl lg:text-[48px] mb-4">Subscribe 订阅</h2>
                      <div className="indicates-required text-sm md:text-base mb-2">
                        <span className="asterisk">*</span> indicates required
                      </div>
                      <div className="mc-field-group space-y-2">
                        <label htmlFor="mce-EMAIL" className="block text-sm md:text-base">
                          Email Address <span className="asterisk">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="EMAIL" 
                          data-lpignore='true' 
                          className="required email w-full p-2 rounded" 
                          id="mce-EMAIL" 
                        />
                        <span id="mce-EMAIL-HELPERTEXT" className="block mt-2 text-xs md:text-sm">
                          Get newsletter updates about upcoming events and information
                        </span>
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
                          <input type="text" name="b_9a0599467edb506239b6ed989_a007452c99" tabIndex="-1" />
                      </div>
                      <div className="optionalParent mt-4">
                        <div className="clear foot flex flex-col md:flex-row items-center gap-4">
                          <input 
                            type="submit" 
                            name="subscribe" 
                            id="mc-embedded-subscribe" 
                            className="button w-full md:w-auto px-6 py-2 rounded" 
                            value="Subscribe" 
                          />
                          <p className="my-2 md:my-auto">
                            <a href="http://eepurl.com/i3XcbM" 
                              title="Mailchimp - email marketing made easy and fun"
                              className="block w-full md:w-auto"
                            >
                              <span className="inline-block bg-transparent rounded">
                                <img 
                                  className="refferal_badge w-[180px] md:w-[220px] h-auto" 
                                  src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                                  alt="Intuit Mailchimp" 
                                />
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