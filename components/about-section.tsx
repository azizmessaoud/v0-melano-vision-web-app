export function AboutSection() {
  const teamMembers = [
    {
      name: "Youssef Abidi",
      phone: "+216 26 530 459",
      title: "Master en robotique et intelligence artificielle",
      experience: "Experience in robotics, IoT, and computer vision",
      email: "etudiant.abidi.youssef@uvt.tn",
    },
    {
      name: "Amal Amouri",
      phone: "+216 99 467 606",
      title: "Final-year student at ISIMM Monastir",
      email: "amalamouri07@gmail.com",
    },
    {
      name: "Tassnim Graba",
      phone: "+216 25 202 100",
      title: "Data Science Engineering student at Tekup",
      email: "graba.tassnim@gmail.com",
    },
    {
      name: "Louay Maddouri",
      phone: "+216 29 281 464",
      email: "maddourilouay@gmail.com",
    },
    {
      name: "Aziz Messaoud",
      title: "Data Science Engineering student at Esprit",
      email: "aziz.messaoud@esprit.tn",
    },
    {
      name: "Amine Ezzaouia",
      email: "mohamedamineezzaouia3@gmail.com",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          About MelanoVision
        </h2>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-3">
            Meet the Team: ClusterCrew
          </h3>
          <p className="text-lg text-foreground/70 mb-2">
            All accepted to Samsung Innovation Campus
          </p>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors shadow-sm"
            >
              <h4 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h4>
              
              {member.title && (
                <p className="text-sm text-primary font-medium mb-2">
                  {member.title}
                </p>
              )}
              
              {member.experience && (
                <p className="text-sm text-foreground/70 mb-3">
                  {member.experience}
                </p>
              )}
              
              <div className="space-y-2 pt-3 border-t border-border">
                {member.phone && (
                  <p className="text-sm text-foreground/60">
                    <span className="font-medium">Phone:</span> {member.phone}
                  </p>
                )}
                <p className="text-sm text-foreground/60 break-all">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-accent hover:underline"
                  >
                    {member.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h4 className="text-2xl font-bold text-foreground mb-3">
            Samsung Innovation Campus
          </h4>
          <p className="text-lg text-foreground/80">
            The MelanoVision team is proud to be accepted to Samsung Innovation Campus,
            where we're advancing AI-powered medical detection technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
