// frontend/src/pages/SignaturePage.jsx
import SignatureForm from '../components/SignatureForm';

export default function SignaturePage() {
  // Define styles for the table for better readability
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '2rem 0',
    fontSize: '0.9em',
  };
  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };
  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  };

  return (
    <div>
      {/* --- Start of Letter Content --- */}
      <div className="letter-content">
        <h2>Detailed Letter</h2>

        <p>
          From August 25–29, 2025, CIPA 2025 SEOUL: Heritage Conservation from Bits will be held at the National Museum of Korea, co-hosted by KAIST and the museum to mark the symposium’s 30th anniversary. Despite the event’s stated mission of preserving cultural heritage through digital technology, KAIST has invited the Technion – Israel Institute of Technology, an institution documented to work closely with the Israeli military and arms industry.
        </p>

        <p>
          Technion has long collaborated with the Israel Defense Forces, with research contributing to technologies used in Israel’s massacre in Palestine <sup>[20]</sup>, where ongoing military operations have destroyed numerous cultural heritage sites. This collaboration has been criticised internationally: in 2014, 343 British academics signed a boycott statement highlighting Technion’s development of unmanned bulldozers used to demolish Palestinian homes and tunnel-detection systems designed to maintain the blockade of Gaza <sup>[15]</sup>. Italian academics later raised similar concerns, citing Technion’s remote-control systems for Caterpillar D-9 bulldozers <sup>[16]</sup>.
        </p>

        <p>
          While the human toll of the ongoing genocide, as documented by the UN Special Rapporteur, is the most gruesome of its consequences, the destruction of heritage sites is the aspect most relevant to this letter. In her March 2024 report, <em>Anatomy of a Genocide</em>, Francesca Albanese notes that “Israel has also destroyed at least 195 heritage sites, 208 mosques, 3 churches, and Gaza’s Central Archives (150 years of history)” <sup>[17]</sup>. In a subsequent October report, <em>Genocide as Colonial Erasure</em>, she explicitly used the term “cultural genocide” <sup>[18]</sup>. UNESCO’s preliminary damage assessment confirms over 100 damaged or destroyed cultural properties <sup>[19]</sup>.
        </p>

        <p>
          In her latest report, <em>From Economy of Occupation to Economy of Genocide</em>, Albanese details how Israeli institutions enable this genocide — not only through weapons research and cooperation with the military, but also by providing the “ideological scaffolding” to sustain it. She writes that “…science and technology departments serve as research and development hubs for collaborations between the Israeli military and arms contractors” and that “leading universities, especially from the Global Minority, partner with Israeli institutions in areas directly harming Palestinians.” She recommends severance of ties and divestment from Israeli institutions, warning that the responsibility to do so may entail criminal liability under international law <sup>[11, 12]</sup>.
        </p>

        <p>
          Therefore, the duty of KAIST to expel Technion from CIPA is not only an ethical and moral obligation but also one carrying potential legal consequences. International law prohibits aiding or abetting genocide (Genocide Convention, Articles I and III(e)) <sup>[21]</sup> and requires parties to the UNESCO World Heritage Convention to refrain from actions harmful to cultural property (Article 6(3)) <sup>[22]</sup>. Continued cooperation with Technion, in the face of credible findings by the UN Special Rapporteur, could expose KAIST to liability under Article 25(3)(c) of the Rome Statute <sup>[23]</sup>.
        </p>

        <p>
          This is not merely a political stance but a question of whether KAIST will uphold the very ethical standards it requires of its own students. The university mandates graduation requirements in the form of Ethics courses entailing Research Ethics, Human Rights, and the responsible use of technology <sup>[1]</sup>, yet hosting Technion – an institution tied to technologies used in war crimes – would make these principles ring hollow. To preach ethics in the classroom while abandoning them in practice is not just hypocrisy; it erodes KAIST’s credibility as a global institution.
        </p>

        <p>
          In light of Technion IIT’s well-documented collaboration with the Israeli military and arms industry <sup>[13, 14]</sup> – complicity in war crimes against the people of Palestine – we urge KAIST to join the growing global academic boycott. As Israel faces increasing international condemnation, even from some of its closest allies <sup>[25]</sup>, its complicit academic and research institutions are becoming isolated from the world stage. A notable example is Spain’s University of La Rioja, which withdrew from an EU project coordinated by Technion IIT, forfeiting €188,750 in funding <sup>[10]</sup>. Further examples of such actions are listed in the table below.
        </p>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>University / Association</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Israeli Institution(s) Targeted</th>
              <th style={thStyle}>Action Taken</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Middle East Studies Association (USA)</td>
              <td style={thTdStyle}>23 Mar 2022</td>
              <td style={thTdStyle}>All Israeli academic institutions</td>
              <td style={thTdStyle}>Academic boycott <sup>[2]</sup></td>
            </tr>
            <tr>
              <td style={thTdStyle}>American Anthropological Association (USA)</td>
              <td style={thTdStyle}>24 Jul 2023</td>
              <td style={thTdStyle}>All Israeli academic institutions</td>
              <td style={thTdStyle}>Adopted boycott resolution <sup>[3]</sup></td>
            </tr>
            <tr>
              <td style={thTdStyle}>University of Barcelona (Spain)</td>
              <td style={thTdStyle}>22 May 2024</td>
              <td style={thTdStyle}>Israeli suppliers in academic/institutional relations</td>
              <td style={thTdStyle}>Pledged exclusion until peace & human rights guarantees <sup>[4]</sup></td>
            </tr>
            <tr>
              <td style={thTdStyle}>Ghent University (Belgium)</td>
              <td style={thTdStyle}>31 May 2024</td>
              <td style={thTdStyle}>All Israeli universities & research institutions</td>
              <td style={thTdStyle}>Ended all ongoing institutional collaborations <sup>[5]</sup></td>
            </tr>
            <tr>
              <td style={thTdStyle}>MIT (USA)</td>
              <td style={thTdStyle}>17 April 2025</td>
              <td style={thTdStyle}>Elbit Systems</td>
              <td style={thTdStyle}>Cut all ties <sup>[24]</sup></td>
            </tr>
            <tr>
                <td style={thTdStyle}>Utrecht University (Netherlands)</td>
                <td style={thTdStyle}>16 May 2025</td>
                <td style={thTdStyle}>University of Haifa; Israeli Ministry of Health</td>
                <td style={thTdStyle}>Ended student exchange; withdrew from project; no new collaborations with Israeli organisations <sup>[6]</sup></td>
            </tr>
            <tr>
                <td style={thTdStyle}>Radboud University (Netherlands)</td>
                <td style={thTdStyle}>21 May 2025</td>
                <td style={thTdStyle}>Tel Aviv University; Hebrew University of Jerusalem</td>
                <td style={thTdStyle}>Suspended institution-wide MoUs <sup>[7]</sup></td>
            </tr>
            <tr>
                <td style={thTdStyle}>Erasmus University Rotterdam (Netherlands)</td>
                <td style={thTdStyle}>5 Jun 2025</td>
                <td style={thTdStyle}>Bar-Ilan University; Hebrew University of Jerusalem; University of Haifa</td>
                <td style={thTdStyle}>Froze collaborations; suspended exchanges <sup>[8]</sup></td>
            </tr>
            <tr>
                <td style={thTdStyle}>Trinity College Dublin (Ireland)</td>
                <td style={thTdStyle}>6 Jun 2025</td>
                <td style={thTdStyle}>All Israeli universities & companies</td>
                <td style={thTdStyle}>Cut all ties <sup>[9]</sup></td>
            </tr>
            <tr>
                <td style={thTdStyle}>University of La Rioja Health Economics group (Spain)</td>
                <td style={thTdStyle}>6 Jun 2025</td>
                <td style={thTdStyle}>Technion IIT</td>
                <td style={thTdStyle}>Withdrew from EU project coordinated by Technion <sup>[10]</sup></td>
            </tr>
          </tbody>
        </table>

        <p>
          Successful academic and institutional boycotts in the past – such as those in the table above – were won only when researchers and academics raised their voices together <sup>[26]</sup>. As KAIST members, we must now meet our own ethical obligations by urging the administration to withdraw Technion’s invitation to CIPA 2025. We invite you to add your name to this statement, demonstrating our community’s refusal to be complicit in war crimes and the destruction of cultural heritage.
        </p>

        <p>
          If you agree with this message, please proceed to the form below; we intend to collect signatures and present them to KAIST as statistics. Please also specify if you would like to remain anonymous.
        </p>

        <hr />

        <h3>References</h3>
        <ol style={{ fontSize: '0.8em', lineHeight: '1.6' }}>
            <li><a href="https://eethics.kaist.ac.kr/pages/sub/mn/sub01_03" target="_blank" rel="noopener noreferrer">https://eethics.kaist.ac.kr/pages/sub/mn/sub01_03</a></li>
            <li><a href="https://mesana.org/news/2022/03/23/middle-east-scholars-vote-to-endorse-bds" target="_blank" rel="noopener noreferrer">https://mesana.org/news/2022/03/23/middle-east-scholars-vote-to-endorse-bds</a></li>
            <li><a href="https://www.insidehighered.com/news/faculty-issues/2023/07/24/anthropologists-back-boycott-israeli-academic-institutions" target="_blank" rel="noopener noreferrer">https://www.insidehighered.com/news/faculty-issues/2023/07/24/anthropologists-back-boycott-israeli-academic-institutions</a></li>
            <li><a href="https://web.ub.edu/en/web/actualitat/w/universitat-clama-per-la-pau" target="_blank" rel="noopener noreferrer">https://web.ub.edu/en/web/actualitat/w/universitat-clama-per-la-pau</a></li>
            <li><a href="https://www.ugent.be/en/news-events/cooperation-with-israeli-partners-update-31-may-2024" target="_blank" rel="noopener noreferrer">https://www.ugent.be/en/news-events/cooperation-with-israeli-partners-update-31-may-2024</a></li>
            <li><a href="https://www.uu.nl/en/news/utrecht-university-will-not-enter-into-any-new-collaborations-with-israeli-organizations-until" target="_blank" rel="noopener noreferrer">https://www.uu.nl/en/news/utrecht-university-will-not-enter-into-any-new-collaborations-with-israeli-organizations-until</a></li>
            <li><a href="https://www.ru.nl/en/about-us/news/radboud-university-is-suspending-institution-wide-partnerships-with-two-israeli-universities" target="_blank" rel="noopener noreferrer">https://www.ru.nl/en/about-us/news/radboud-university-is-suspending-institution-wide-partnerships-with-two-israeli-universities</a></li>
            <li><a href="http://www.eur.nl/en/news/eur-freezes-institution-wide-collaborations-bar-ilan-university-hebrew-university-jerusalem-and" target="_blank" rel="noopener noreferrer">www.eur.nl/en/news/eur-freezes-institution-wide-collaborations-bar-ilan-university-hebrew-university-jerusalem-and</a></li>
            <li><a href="https://www.irishnews.com/news/northern-ireland/queens-university-confirms-end-to-israeli-investments-HSP4O2RTMRDCHFAJCTPV5756BQ/" target="_blank" rel="noopener noreferrer">https://www.irishnews.com/news/northern-ireland/queens-university-confirms-end-to-israeli-investments-HSP4O2RTMRDCHFAJCTPV5756BQ/</a></li>
            <li><a href="https://cadenaser.com/rioja/2025/06/05/un-grupo-de-investigacion-de-la-universidad-de-la-rioja-renuncia-a-un-proyecto-europeo-coordinado-desde-israel-radio-rioja/" target="_blank" rel="noopener noreferrer">cadenaser.com/rioja/2025/06/05/un-grupo-de-investigacion-de-la-universidad-de-la-rioja-renuncia-a-un-proyecto-europeo-coordinado-desde-israel-radio-rioja/</a></li>
            <li><a href="https://www.ohchr.org/en/documents/country-reports/ahrc5923-economy-occupation-economy-genocide-report-special-rapporteur" target="_blank" rel="noopener noreferrer">https://www.ohchr.org/en/documents/country-reports/ahrc5923-economy-occupation-economy-genocide-report-special-rapporteur</a></li>
            <li><a href="https://www.elbitsystems.com/blog/where-robots-go-to-play" target="_blank" rel="noopener noreferrer">https://www.elbitsystems.com/blog/where-robots-go-to-play</a></li>
            <li><a href="https://aerospace.technion.ac.il/academia-industry-relations/" target="_blank" rel="noopener noreferrer">https://aerospace.technion.ac.il/academia-industry-relations/</a></li>
            <li><a href="https://en.huji.ac.il/news/hebrew-university-and-technion-partner-ibm-advance-artificial-intelligence" target="_blank" rel="noopener noreferrer">https://en.huji.ac.il/news/hebrew-university-and-technion-partner-ibm-advance-artificial-intelligence</a></li>
            <li><a href="https://www.theguardian.com/world/2015/oct/27/uk-academics-boycott-universities-in-israel-to-fight-for-palestinians-rights" target="_blank" rel="noopener noreferrer">https://www.theguardian.com/world/2015/oct/27/uk-academics-boycott-universities-in-israel-to-fight-for-palestinians-rights</a></li>
            <li><a href="https://israel365news.com/304637/italian-professors-urge-academic-boycott-of-technion-for-supporting-occupation-technology-and-business" target="_blank" rel="noopener noreferrer">https://israel365news.com/304637/italian-professors-urge-academic-boycott-of-technion-for-supporting-occupation-technology-and-business</a></li>
            <li><a href="https://www.ohchr.org/sites/default/files/documents/hrbodies/hrcouncil/sessions-regular/session55/advance-versions/a-hrc-55-73-auv.pdf" target="_blank" rel="noopener noreferrer">https://www.ohchr.org/sites/default/files/documents/hrbodies/hrcouncil/sessions-regular/session55/advance-versions/a-hrc-55-73-auv.pdf</a></li>
            <li><a href="https://docs.un.org/en/A/79/384" target="_blank" rel="noopener noreferrer">https://docs.un.org/en/A/79/384</a></li>
            <li><a href="https://www.unesco.org/en/gaza/assessment" target="_blank" rel="noopener noreferrer">https://www.unesco.org/en/gaza/assessment</a></li>
            <li><a href="https://technionuk.org/news-post/the-nagel-committee-report-evolving-israels-defence-strategy/" target="_blank" rel="noopener noreferrer">https://technionuk.org/news-post/the-nagel-committee-report-evolving-israels-defence-strategy/</a></li>
            <li>Convention on the Prevention and Punishment of the Crime of Genocide, Dec. 9, 1948, 78 U.N.T.S. 277, arts. I, III(e), IV, V. <a href="https://www.un.org/en/genocideprevention/documents/atrocity-crimes/Doc.1_Convention%20on%20the%20Prevention%20and%20Punishment%20of%20the%20Crime%20of%20Genocide.pdf" target="_blank" rel="noopener noreferrer">[Link]</a></li>
            <li>Convention Concerning the Protection of the World Cultural and Natural Heritage, Nov. 16, 1972, 1037 U.N.T.S. 151, art. 6(3). <a href="https://whc.unesco.org/en/conventiontext/" target="_blank" rel="noopener noreferrer">[Link]</a></li>
            <li>Rome Statute of the International Criminal Court, July 17, 1998, 2187 U.N.T.S. 90, arts. 25(3)(c). <a href="https://www.icc-cpi.int/sites/default/files/2024-05/Rome-Statute-eng.pdf" target="_blank" rel="noopener noreferrer">[Link]</a></li>
            <li><a href="https://www.business-humanrights.org/en/latest-news/usa-after-six-month-campaign-mit-cuts-ties-with-israeli-weapons-manufacturer-elbit-systems/" target="_blank" rel="noopener noreferrer">https://www.business-humanrights.org/en/latest-news/usa-after-six-month-campaign-mit-cuts-ties-with-israeli-weapons-manufacturer-elbit-systems/</a></li>
            <li><a href="https://www.theguardian.com/world/2025/aug/08/germany-halts-military-exports-to-israel-gaza-friedrich-merz" target="_blank" rel="noopener noreferrer">https://www.theguardian.com/world/2025/aug/08/germany-halts-military-exports-to-israel-gaza-friedrich-merz</a></li>
            <li>Numerous examples of this can be cited, here is one: <a href="https://fnl.mit.edu/may-june-2024/no-more-mit-research-for-israels-ministry-of-defense/" target="_blank" rel="noopener noreferrer">https://fnl.mit.edu/may-june-2024/no-more-mit-research-for-israels-ministry-of-defense/</a></li>
        </ol>
      </div>
      {/* --- End of Letter Content --- */}
      
      <hr style={{ margin: '2rem 0' }}/>

      <h2>Add Your Signature</h2>
      <SignatureForm />
    </div>
  );
}