import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from "../assets/icons/arrow_right_alt.svg";

function FeaturedEditorial() {
  return (
    <section className="flex overflow-hidden justify-center items-start pb-16 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink gap-10 justify-center w-full basis-0 max-w-[1080px] min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink my-auto text-2xl basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-zinc-400">Featured</div>
            <div className="chinese flex flex-col mt-10 w-full text-5xl font-medium max-md:max-w-full max-md:text-4xl">
              <h2 className="text-black leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Lan Yu
              </h2>
              <div className="leading-tight text-red-600 max-md:max-w-full max-md:text-4xl">
                梦话
              </div>
            </div>
            <p className="mt-10 leading-9 text-black max-md:max-w-full">
              A shadow journalist with years of on-the-ground reporting experience in China and the SOPA Awards recognition.
            </p>
            <p className="mt-5 leading-9 text-black max-md:max-w-full">
              Is internet censorship solely a China problem? Recent legal challenges against Google in the U.S. highlight a broader issue: while state-driven censorship is prevalent, corporate censorship also poses real threats. 
            </p>
            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 1: How did the internet start in the U.S. and in China, respectively?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The internet originated in the U.S., where it not only led China in the number of early users but also excelled in integrating the internet into all aspects of life, establishing major tech companies, and driving new economic developments.
              However, the most significant difference lies in their approaches to regulation and control.
              From the start, the U.S. focused on gradually building legislative frameworks to manage content, while China prioritized centralized control from the outset, though its formal legislation lagged behind the U.S. in terms of timing.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In the U.S., efforts to network computers began in the 1960s, with a major breakthrough occurring in 1965 when Lawrence G. Roberts and Thomas Merrill successfully connected a computer at MIT in Massachusetts to a computer in Santa Monica, California, via a telephone line.
              The success of early networking efforts laid the groundwork for ARPANET, a pioneering project initiated by the U.S. Department of Defense to link computers across vast distances, considered a precursor to the modern internet. By 1971, Ray Tomlinson wrote the code for network email and sent the first email over the ARPANET.
              In 1991, Tim Berners-Lee launched the World Wide Web, making the internet widely accessible.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Throughout the 1990s, companies like Yahoo, Amazon, and Google emerged, turning the internet into a central part of the U.S. economy.
              By 1998, the U.S. had over 75 million users, leading the world in integrating the internet into all aspects of life, from communication to commerce.
              China had about 2.1 million users that year.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
            Although the U.S. was not free from censorship, early legislative efforts like the Communications Decency Act (CDA) of 1996 aimed to regulate online content,  prohibiting the posting of “indecent” or “patently offensive” materials in public forums. by the 1997 Supreme Court  struck down major portions of the CDA when ruling in Reno v. American Civil Liberties Union, affirming that the internet was entitled to the same level of First Amendment protection as print media.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In contrast, China’s internet journey began later but quickly moved toward a more controlled model. In 1971, as Sino-American relations thawed and Deng Xiaoping took power, China embarked on early internet experiments. China initiated its first internet technology trials, sending out its first email to a German University in 1987. And by 1994, the Chinese Academy of Sciences connected the country to the World Wide Web. Recognizing the potential political risks of unrestricted internet access, the Chinese government quickly established control mechanisms. In 1996, it issued the “Temporary Regulations Governing Computer Information Networks and the Internet,” centralizing internet access through government-controlled gateways. By 1998, China had launched the Golden Shield project, known as the Great Firewall, which became fully operational in 2003 and allowed the government to censor politically sensitive content. Unlike the U.S., which focused on legal frameworks to regulate content, China’s approach emphasized technological infrastructure for censorship and control. Though comprehensive internet laws, such as the Cybersecurity Law, were not enacted until 2017, the regulatory mechanisms were in place much earlier.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The regulatory environment in China made it challenging for U.S. tech companies to penetrate the Chinese market. Google, for instance, faced frequent blocking and ultimately withdrew from China in 2010. This opened the door for domestic companies to thrive. NetEase, founded in 1997, played a crucial role in China’s early internet development by providing essential services like email, and launching one of the first Chinese portals offering news, forums, and chat rooms, fostering early online communities. Later, its expansion into online gaming attracted a broader range of users beyond those focused on information and communication. In 1999, Tencent was founded, and its instant messaging platform QQ became a vital communication tool for millions of Chinese users, laying the foundation for online social interaction in the country. By 2000, Baidu emerged as China’s leading search engine, benefiting from Google’s increasing restrictions and eventual exit from the market.
            </p>
            
            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 2: How do national security concerns and citizen safety issues legitimize internet censorship and surveillance in both China and the U.S.?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In both China and the U.S., concerns such as pornography, protection of minors, and national security drive internet censorship and surveillance, though the motivations and societal reactions differ markedly between the two. China prioritizes political stability, often leading to extensive state control over online content. In contrast, the U.S. grapples with balancing security needs against individual privacy rights, sparking contentious public debates that reflect deeply held values on freedom and privacy.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In 2007, China’s president Hu Jintao directed regulators to foster a “healthy online culture” to protect minors and prevent juvenile crime, which included a ban on opening new internet cafes. This initiative was part of a broader strategy to control the digital environment and reinforce social and political stability.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The 2019 Anti-Extradition Bill Movement in Hong Kong intensified nationalist sentiments and the perception of Western interference. Chinese State media and public discourse painted the protests as heavily influenced by Western ideologies, portraying Hong Kong demonstrators as pawns of anti-CCP forces. This narrative framed the protests as a national security threat, somehow justifying stringent censorship measures in China to maintain national stability and suppress foreign-driven unrest.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The subsequent implementation of the Hong Kong National Security Law in 2020 led to widespread self-censorship, with significant repercussions for media outlets and art organizations. Arrests over anti-national rhetoric solidified censorship’s role as a protective measure for national sovereignty.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The enactment of the anti-espionage law in 2023 in mainland China further emphasized the state’s commitment to controlling the flow of information, with severe consequences for activities classified under this law.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In the U.S., the legislative process regarding censorship and surveillance represent a trajectory of increasing governmental oversight in response to evolving challenges to safeguard both public safety and constitutional freedoms. In 1996, the Child Pornography Prevention Act criminalized depictions of minors engaged in sexual activities, including simulated acts, marking a firm stance on protecting minors from exploitation. Two years later, in 1998, the Child Online Protection Act (COPA) was introduced to further restrict the online commercial distribution of material deemed harmful to minors, guided by contemporary community standards. Despite its protective intentions, COPA faced numerous legal challenges over First Amendment rights and was ultimately struck down by the Supreme Court in 2004, highlighting the complexities of regulating online content without infringing on free speech.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The landscape of U.S. surveillance saw a significant shift following the 9/11 terrorist attacks. In response to growing security concerns, the U.S. government adopted a more direct legislative approach to enhance its surveillance capabilities. This included leveraging the Electronic Communication Transactional Records Act of 1996 and introducing the USA PATRIOT Act in 2001. The latter notably expanded governmental powers, purportedly to bolster national security.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              By 2024, concerns over data privacy and foreign influence prompted the introduction of legislative measures such as the TikTok sell-or-ban bill in the U.S. This bill faced significant public backlash, with many defending the freedoms of the digital age, including the right to use international apps.
            </p>

            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 3: How does the censorship approach of the world’s biggest search engine, Google, vary considerably between China and the U.S.?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Google’s position as one of the few international search engines operating in China meant that it initially made significant efforts to comply with the central government’s strict censorship policies, despite this going against its ethos of open and free access to information and attracting ongoing international criticism.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Since its Initial launch in 2000, Google’s Chinese search engine faced frequent instability and was blocked approximately 15% of the time. The situation deteriorated in 2002 when Google was completely blocked for nine days, a blockade reportedly tied to the National Computer Network. Another significant interruption occurred in 2003 with the activation of the Great Firewall, culminating in 2006 when Google launched Google.cn, explicitly complying with government censorship requirements. This compliance extended to other platforms like YouTube, which experienced intermittent blocks starting in 2008. However, by 2010, Google withdrew its search engine from mainland China. This happened after Google discovered that Chinese hackers had attacked the company’s corporate infrastructure in an attempt to access the Gmail accounts of human rights activists.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In the U.S., Google’s engagement with censorship focuses more on adhering to local laws and corporate policies concerning hate speech and misinformation. For instance, in 2014, Google removed misleading ads placed by some anti-abortion centers. In 2017, Google faced criticism when YouTube’s “Restricted Mode” filtered out LGBT content discussing sexuality and gender identity, despite it not containing explicit content. The company’s response to misinformation saw a notable example in 2020 during the COVID-19 pandemic when Google removed autocomplete suggestions related to the COVID-19 lab leak theory and YouTube banned content that contradicted WHO advice or was deemed medically unsubstantiated. Moreover, in 2024, Google’s handling of autocomplete suggestions related to a July assassination attempt on a former president garnered scrutiny.
            </p>
            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 4: What sensitive political events have driven internet censorship in China?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Several sensitive political events have significantly influenced internet censorship practices in China, each marking a critical point in the government’s stringent information controls. The Tiananmen Square incident in 1989 was a pivotal moment, where the government’s use of military force to suppress student-led protests directly challenged the legitimacy of the Chinese Communist Party’s rule, catalyzing the onset of strict internet information management.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In 1999, China began persecuting Falun Gong, a religious movement that had rapidly gained nationwide popularity, and banned all information promoting the practice, which authorities labeled an “evil cult.”
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              By 2008, tensions flared during the Beijing Summer Olympics, when significant unrest in Tibet, sparked by peaceful demonstrations by monks over the treatment and persecution of Tibetans, quickly escalated into widespread protests across the region. The Chinese government’s forceful response, involving arrests and alleged human rights abuses, drew international condemnation and impacted the global perception of the Olympics. The international stage of the Olympic Torch Relay was transformed into a platform for political protest by Tibetan exiles and activists, particularly in cities like London, Paris, and San Francisco.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              The following year, in 2009, violent clashes in Xinjiang between Uighur and Han Chinese populations prompted the government to shut down internet access in the region for several months, marking a turning point that led to tighter security measures and information controls.
              In 2015, the “709 crackdown” saw the arrest of numerous human rights lawyers and activists across China, who had once relied on social media to advocate for a more democratic and open system. This crackdown highlighted a continued pattern of repressing dissent and controlling digital communication to prevent the spread of reformist ideas.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              More recently, in 2022, the White Paper Movement emerged from public frustration with the harsh Zero-COVID policy. This movement, which gained momentum after the Shanghai lockdown and the tragic fire in Urumqi, saw protests across China using blank pieces of paper as a powerful yet silent statement to avoid direct censorship while symbolically expressing their grievances and calling for President Xi to step down.
            </p>
            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 5: How do netizens bypass internet censorship & surveillance?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Virtual Private Networks (VPNs), initially developed from research into IP security in 1993, have become indispensable tools for bypassing internet censorship and enhancing data security globally. As online privacy concerns and cybercrime rates soar, VPNs are increasingly utilized worldwide to guard against hacking, surveillance, and to maintain freedom on the internet.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In the U.S., the adoption of VPNs has surged, transitioning from a business-exclusive tool to a household staple. According to a 2024 Security.org report, 95% of adults are now familiar with VPNs, and 46% actively use them. This translates to approximately 105 million Americans using VPNs to shield themselves from tracking by search engines and social media platforms, with projections suggesting an additional 10 million new users in 2024 alone.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In China, VPNs enable netizens to bypass the Great Firewall, accessing restricted platforms like Google, Facebook, and Twitter, while hiding their digital footprint by redirecting traffic through a remote server. However, China started to crack down on VPN use in 2017. That year, the Ministry of Industry and Information Technology launched a 14-month “cleanup” of internet access services, making it illegal to operate VPN services without government approval. Violators face harsh penalties, including prison sentences and heavy fines. One individual was sentenced to nine months in prison for selling VPNs, while another received a 5 1/2-year sentence for profiting from illegal VPN sales. In the same year, Apple also removed 674 VPN apps from its App Store in China.
            </p>
            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 6: How do the Firewall and the flourishing tech ecosystem affect young Chinese’s curiosity to the outside world and their attitude to censorship?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In the wake of Google’s complete exit from China in the 2010s, a flourishing ecosystem of domestic browsers and social media platforms quickly filled the vacuum. Platforms like Weibo, Douyin (known as TikTok outside of China), and Kuaishou not only gained immense popularity but also helped to shape a self-contained cyberspace in which Chinese netizens have little reason to venture beyond. Despite the availability of tools to circumvent censorship, such as VPNs, there is a noticeable lack of interest among the general populace in accessing blocked information. For instance, a survey highlighted that nearly half of 1,000 Beijing college students did not use free tools to bypass the Great Firewall. Moreover, those who did were not necessarily engaging with censored news, suggesting a contentment with or indifference to the curated digital environment provided by the state. Interestingly, a 2014 study concluded that even if the Great Firewall were lifted, many people would continue to use local websites, driven by a preference for cultural proximity over foreign alternatives.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Meanwhile, paradoxically, a segment of youth, often referred to as “Little Pink,” passionately uses VPNs for an unexpected purpose. Fueled by a strong sense of nationalism, these young individuals actively engage on overseas social media platforms like Facebook, Instagram, and Twitter—all of which are blocked in mainland China—to debate political issues with users in Taiwan and Hong Kong. They focus on defending the One-China policy and Beijing’s crackdown on the pro-democracy movement in Hong Kong, zealously guarding China against any form of criticism, showcasing a complex interplay of nationalism and digital engagement that transcends the barriers set by censorship.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Mirroring this situation, in the US, the proposed TikTok ban bill has ignited substantial public debate, highlighting a parallel but contrasting dynamic. Many young Americans value TikTok not just for entertainment and self-expression but also as a crucial platform for e-commerce and monetization, deeply integrating it into their social and economic lives. This scenario underscores a global discourse on the balance between national security and personal freedoms, showing how control over the internet can profoundly shape a generation’s worldview as both Chinese and American youths navigate digital landscapes shaped by political and cultural forces.
            </p>
            <h3 className="mt-8 text-3xl text-black max-md:max-w-full">
              Question 7: How do these societies balance the protection of online anonymity, freedom of speech, and political discourse?
            </h3>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In China, anonymity online is virtually non-existent. Over the past few years, under a national campaign to combat telecommunications fraud, websites and apps have been required to verify users with their phone numbers, which are linked to personal identification numbers assigned to all adults.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In 2022, amid widespread negative online comments on the Zero-COVID policy and its impacts on daily life, the Chinese government introduced regulations that mandated the display of user IP-based locations on social media platforms. This step aimed at enhancing the government's ability to monitor and restrict dissent by distinguishing between users within the country and those accessing from overseas.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Now remaining anonymous could get more difficult under a proposal by China’s internet regulators in July: The government wants to take over the task of verification from the internet companies and give people a single ID to use across the internet.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              In the U.S., the Supreme Court case McIntyre v. Ohio Elections Commission (1995) plays a crucial role in the protection of anonymity in political discourse. The case arose when Margaret McIntyre, an Ohio resident, distributed anonymous leaflets opposing a local school tax levy. She was fined by the Ohio Elections Commission for violating an Ohio law that prohibited the distribution of anonymous campaign literature. Margaret McIntyre argued that the law violated her First Amendment rights to free speech and anonymity. The case eventually reached the Supreme Court, which ruled in her favor, striking down the Ohio law as unconstitutional. The Court held that the First Amendment protects the right to anonymous speech, emphasizing that such a right is a fundamental safeguard against the repression of minority opinions and a defense against retaliation from those in power.
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              This case set a precedent for protecting the right to remain anonymous online, emphasizing that anonymity serves as a shield from the tyranny of the majority. The Court’s decision highlights the fundamental purpose of the Bill of Rights and the First Amendment: to protect unpopular individuals from retaliation by an intolerant society. 
            </p>
            <p className="mt-5 leading-9 text-black text-xl max-md:max-w-full">
              Today, tensions between governments and tech companies over anonymity, free speech, and national security are growing. The U.S. considers banning TikTok, and France recently arrested the Telegram CEO for refusing to provide user information tied to suspected cyber crime. In this shifting landscape, artistic initiatives like FIREWALL Cafe are increasingly important, offering a creative space for citizens to reflect on the balance between collective security and individual freedoms in the digital age, as well as explore and question our relationship with information and the concept of freedom.
            </p>


            {/* <Link to="/editorial/lan-yu" className="flex gap-1 justify-center items-center self-start px-4 mt-10 text-xl text-center text-red-600 bg-white rounded border border-red-600 border-solid min-h-[56px]">
              <span className="self-stretch my-auto">Read article</span>
              <img src={ArrowRight} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedEditorial;