import React from "react";

function SubscribeSection() {
  return (
    <div className="flex flex-col w-full h-full bg-newsletter">
      <div className="flex flex-col items-center w-full h-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col w-full max-w-2xl">
          <div className="flex flex-col mt-3 md:mt-24 w-full md:text-xl text-white">
            <div>
              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form action="https://joyceyujeanlee.us12.list-manage.com/subscribe/post?u=9a0599467edb506239b6ed989&amp;id=a007452c99&amp;f_id=0037bce2f0" 
                    method="post" 
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate py-8 md:py-12" 
                    target="_self"
                  >
                    <div id="mc_embed_signup_scroll" className="relative">
                      <h2 className="font-display-04 font-bitmap-song">Stay connected</h2>
                      <div className="font-display-04 text-red-600 font-bitmap-song">保持联系</div>
                      <div className="mc-field-group space-y-2">
                        <span id="mce-EMAIL-HELPERTEXT" className="block mt-6 font-body-02">
                          Get updates about upcoming events, press releases, and expert commentary with the FIREWALL Cafe newsletter.
                        </span>
                        <div className="flex items-center w-full">
                          <input 
                            type="email" 
                            name="EMAIL" 
                            data-lpignore='true' 
                            className="flex-1 text-black p-2 min-h-[56px] border-r border-red-600" 
                            id="mce-EMAIL"
                            placeholder="Email 电邮"
                          />
                          <input 
                            type="submit" 
                            name="subscribe" 
                            id="mc-embedded-subscribe" 
                            className="whitespace-nowrap justify-center min-h-[56px] text-red-600 p-2" 
                            value="Submit" 
                          />
                        </div>
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
                      <div className="hidden optionalParent mt-4">
                        <div className="clear foot flex flex-col md:flex-row items-center gap-4">
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