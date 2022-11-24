import BtnPrimary from "@/components/widgets/Buttons/BtnPrimary"

function Section_01() {
  return (
    <section className="section_01">
      <div className="frame_01">
        <h4>WHO WE ARE</h4>
        <h2>CENTRE FOR AEROSPACE & SECURITY STUDIES</h2>
        <p>The “Centre for Aerospace & Security Studies” (CASS) is an independent think tank located in Islamabad, Pakistan. CASS is unique in its specialization of Aerospace, as the only think tank in Pakistan to carry out systematic research in the domain. The aerospace sector is a key driver behind globalization, playing a pivotal role in national security, economic development and in supporting long-term economic growth to facilitate a country’s integration into the global economy. </p>
        <BtnPrimary label='More About Us' />
      </div>
      <div className="frame_02">
        <img src={"https://picsum.photos/seed/picsum/700/700"} alt="" />
      </div>
    </section>
  )
}

export default Section_01