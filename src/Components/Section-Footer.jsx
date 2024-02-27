import React from 'react'

const SectionFooter = () => {
    return (
        <div className="section-home-footer bg-[#004936]">
            <div className="form-container flex py-0 px-[5%] mx-0 flex-col items-center max-w-[1920px] bg-[#000] border border-solid border-[#000]">
                <div className="form_component flex py-[40px] self-center items-center justify-center flex-row w-full gap-x-4 gap-y-4">
                    <div className="home-form-text flex self-center justify-center text-center">
                        <div className="home-form-block-text flex w-full tracking-wide text-[#fff] text-left justify-center text-[20px] font-thin leading-7">Sign up today for the latest updates from Metaplex</div>
                    </div>
                    <div className="home-form-block-wrapper flex w-full max-w-[444px] justify-end">
                        <div className="home-form-block w-form mb-0">
                                    <form id="email-form" name="email-form" data-name="Email Form" action="https://api.hsforms.com/submissions/v3/integration/submit/20740499/c441bdad-c2cc-4306-bf87-8cd26c5407f4" method="post" className="home-form relative block mt-0" data-wf-page-id="6515dd6d95986415af97b957" data-wf-element-id="d4e4e57a-6ad0-d55b-39d2-f890dfc9d93f" aria-label="Email Form" data-hs-cf-bound="true">
                                        <div className="home-form-input-group w-full min-w-full flex items-center justify-end">
                                            <input className="home-form-text-field w-input h-auto min-w-[384px] text-[#fff] bg-[#1b1b1b] border py-5 px-6 border-solid border-[rgba(255,255,255,.05)] rounded-lg flex-1 mb-0 my-6 mx-5 text-[16px] w-full align-middle leading-[1.42857] block" maxLength="256" name="email" data-name="Email" placeholder="Your email" type="email" id="email" required=""/>
                                            <input type="submit" data-wait="Please wait..." className="home-form-block-submit w-button mt-[30px] bg-[white] text-black rounded-lg mr-[28px] py-3 px-4 text-[14px] font-normal leading-[1.4] absolute cursor-pointer border-0 inline-block" value="Sign Up"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFooter
