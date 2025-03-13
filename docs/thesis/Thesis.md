**PROPOSAL SKRIPSI**

# **APLIKASI KURSUS DIGITAL BERBASIS *GENERATIVE AI*, OPTIMALISASI PERSONALISASI KONTEN MELALUI *AI AGENT* UNTUK MENINGKATKAN MOTIVASI BELAJAR**

![][image1]
**Oleh:**
**Vito Andareas Manik**
**226651027**

**PROGRAM STUDI TEKNIK INFORMATIKA MULTIMEDIA**
**JURUSAN TEKNOLOGI INFORMASI**
**POLITEKNIK NEGERI SAMARINDA**
**TAHUN 2025**

**PROPOSAL SKRIPSI**

**APPLICATION OF DIGITAL COURSES BASED ON GENERATIVE AI: OPTIMIZING CONTENT PERSONALIZATION THROUGH AI AGENTS TO INCREASE LEARNING MOTIVATION**

*Sebagai salah satu syarat untuk menyelesaikan*
*Program Studi Diploma IV Jurusan Teknologi Informasi*

![][image1]
**Oleh:**
**Vito Andareas Manik**
**226651027**

**PROGRAM STUDI TEKNIK INFORMATIKA MULTIMEDIA**
**JURUSAN TEKNOLOGI INFORMASI**
**POLITEKNIK NEGERI SAMARINDA**
**TAHUN 2025**

# **BAB I**  **PENDAHULUAN**

1. ## **Latar Belakang**

	Kemajuan pesat dalam bidang kecerdasan buatan (Artificial Intelligence/AI), khususnya *Generative AI*, telah memberikan dampak transformatif pada berbagai sektor industri, termasuk pendidikan digital. Teknologi ini memiliki kemampuan untuk menghasilkan dan menyesuaikan konten secara otomatis berdasarkan data input, yang membuka peluang signifikan untuk pengembangan sistem pembelajaran yang lebih adaptif dan responsif. Seiring dengan meningkatnya adopsi pembelajaran daring pasca pandemi *COVID-19*, kebutuhan akan solusi pendidikan digital yang efektif dan menarik menjadi semakin mendesak, terutama dalam bidang teknologi seperti pemrograman yang membutuhkan pendekatan pembelajaran yang terstruktur namun fleksibel. Dhawan (2020) menegaskan bahwa pandemi telah mempercepat transformasi digital dalam pendidikan, namun juga mengungkap berbagai tantangan terkait efektivitas dan keterlibatan peserta dalam pembelajaran daring.
	Tantangan utama dalam implementasi pembelajaran daring adalah rendahnya tingkat keterlibatan dan motivasi peserta, yang berdampak langsung pada tingkat penyelesaian kursus. Berdasarkan teori Self-Determination (SDT) yang dikembangkan oleh Ryan dan Deci, motivasi intrinsik pembelajar dipengaruhi oleh tiga kebutuhan psikologis dasar: otonomi, kompetensi, dan keterkaitan. Chiu (2022) dalam penelitiannya menunjukkan bahwa pemenuhan ketiga kebutuhan psikologis tersebut berkorelasi positif dengan tingkat keterlibatan peserta dalam pembelajaran daring. Dalam konteks kursus teknologi seperti pemrograman, personalisasi menjadi krusial mengingat variasi tingkat pengetahuan awal dan gaya belajar yang dimiliki oleh peserta. Werang dan Leba (2022) mengidentifikasi bahwa konten pembelajaran yang tidak relevan dengan kebutuhan individu menjadi salah satu faktor utama rendahnya keterlibatan peserta dalam pembelajaran daring.
	*AI Agent* menawarkan solusi yang lebih komprehensif dibandingkan pendekatan konvensional dalam implementasi personalisasi pembelajaran. Berbeda dengan pendekatan statis, *AI Agent* beroperasi sebagai sistem berkelanjutan yang mampu mengumpulkan data interaksi pengguna, menganalisis pola belajar, dan secara adaptif menyesuaikan materi pembelajaran sesuai dengan kebutuhan individu. Istrate (2024) mendemonstrasikan efektivitas *AI Agent* dalam menghasilkan materi pembelajaran yang selaras dengan tingkat pemahaman pengguna. Pendekatan ini secara signifikan mampu meningkatkan pengalaman belajar dengan menyediakan konten yang relevan dan menarik, yang pada gilirannya meningkatkan keterlibatan peserta dalam kursus teknologi yang kompleks seperti pemrograman. Kanchon et al. (2024) memperkuat argumen ini dengan membuktikan bahwa sistem pembelajaran berbasis *AI* yang mampu mengidentifikasi gaya belajar dan memodifikasi konten secara otomatis dapat meningkatkan retensi pengetahuan dan motivasi intrinsik peserta didik.
	Implementasi *Generative AI* melalui *AI Agent* untuk personalisasi konten pembelajaran memerlukan pendekatan yang terstruktur dan komprehensif. Penelitian ini berfokus pada pengembangan aplikasi kursus digital yang mengimplementasikan teknik-teknik seperti prompt engineering dinamis, Retrieval Augmented Generation (RAG), dan iterasi pembelajaran berulang untuk menghasilkan konten yang adaptif terhadap kebutuhan pengguna. Binhammad et al. (2024) menyoroti bahwa personalisasi konten pembelajaran melalui *Generative AI* dapat memenuhi kebutuhan otonomi dan kompetensi dalam kerangka SDT, sehingga meningkatkan motivasi intrinsik peserta. Dengan pendekatan personalisasi yang berfokus pada adaptasi konten berdasarkan kemampuan, preferensi, dan pola belajar pengguna, penelitian ini bertujuan untuk mengatasi tantangan rendahnya motivasi dan keterlibatan dalam pembelajaran digital.

	Evaluasi dampak implementasi akan dilakukan melalui pengujian dengan 20-30 responden, dengan fokus pada pengukuran tingkat keterlibatan, motivasi, dan pengalaman belajar pengguna sesuai dengan prinsip-prinsip SDT. Du Plooy et al. (2024) menekankan pentingnya evaluasi berbasis pengguna untuk mengukur efektivitas personalisasi pembelajaran adaptif dalam meningkatkan performa akademik dan keterlibatan peserta.

2. ## **Rumusan Masalah**

Berdasarkan latar belakang, rendahnya motivasi dan engagement dalam pembelajaran digital dapat diatasi melalui penggunaan *generative AI* untuk menghasilkan konten yang personal dan adaptif. Dengan memanfaatkan *AI Agent* yang menerapkan teknik prompt engineering dinamis, RAG, dan *iterative feedback loop*, penelitian ini merumuskan masalah sebagai berikut:

1. Bagaimana pengembangan dan implementasi AI Agent berbasis generative AI dapat menghasilkan konten pembelajaran yang personal dan adaptif pada platform kursus digital?
2. Sejauh mana penerapan teknik prompt engineering dinamis, Retrieval Augmented Generation (RAG), dan iterative feedback loop meningkatkan relevansi dan kualitas konten yang dihasilkan?
3. Bagaimana fitur personalisasi konten ini, dengan merujuk pada Self-Determination Theory, dapat memenuhi kebutuhan psikologis dasar (otonomi, kompetensi, keterkaitan) dan meningkatkan motivasi belajar?
4. Apa dampak implementasi fitur personalisasi konten terhadap pengalaman belajar dan tingkat penyelesaian kursus, berdasarkan evaluasi dengan 20-30 responden?

   3. ## **Batasan Masalah**

Untuk menghindari pembahasan meluas keluar dari inti penelitian, maka diberikan batasan masalah sebagai berikut.

1. Penelitian ini terbatas pada pengembangan dan implementasi AI Agent untuk personalisasi konten pembelajaran berbasis teks, video, dan konten interaktif, dengan fokus pada kursus digital di bidang pengembangan software dasar (pemrograman).
2. AI Agent dikembangkan menggunakan teknologi JavaScript, LangChain, *Gemini*, dan *Claude*, dengan penerapan teknik *prompt engineering* dinamis, retrieval augmented generation (RAG), dan *iterative feedback loop* untuk menyesuaikan materi modul berikutnya berdasarkan hasil kuis dan kemajuan pengguna.
3. Evaluasi motivasi belajar mengacu secara eksklusif pada Self-Determination Theory (SDT) dan diukur melalui metrik seperti waktu belajar, tingkat penyelesaian kursus, dan feedback pengguna, dengan pengujian dilakukan pada 20-30 responden yang berusia antara 13 hingga 20 tahun.
4. Implementasi platform dibatasi pada lingkungan berbasis web saja, dan metodologi *Agile Scrum* diterapkan khusus untuk pengembangan dan iterasi *AI Agent* dalam adaptasi konten pembelajaran.

   4. ## **Tujuan Penelitian**

	Tujuan dari penelitian ini adalah sebagai berikut.

1. Mengembangkan dan mengimplementasikan *AI Agent* berbasis *generative AI* untuk menghasilkan konten pembelajaran yang personal dan adaptif pada platform kursus digital di bidang pengembangan software dasar (pemrograman).
2. Mengevaluasi efektivitas teknik prompt engineering dinamis, Retrieval Augmented Generation (RAG), dan iterative feedback loop dalam meningkatkan relevansi dan kualitas konten yang dihasilkan oleh *AI Agent*.
3. Menilai sejauh mana personalisasi konten yang dihasilkan, dengan merujuk pada Self-Determination Theory (SDT), dapat memenuhi kebutuhan psikologis dasar—otonomi, kompetensi, dan keterkaitan—untuk meningkatkan motivasi belajar.
4. Mengukur dampak implementasi fitur personalisasi konten terhadap pengalaman belajar dan tingkat penyelesaian kursus melalui pengujian pada 20-30 responden berusia antara 13 hingga 20 tahun.

   5. ## **Manfaat Penelitian**

      1. ### **Manfaat Teoritis**

	Penelitian ini memperkaya literatur tentang penerapan generative AI dalam personalisasi konten pembelajaran, khususnya di bidang pengembangan software dasar. Dengan menggunakan Self-Determination Theory (SDT) sebagai kerangka evaluasi, penelitian ini menyajikan pemahaman mendalam mengenai bagaimana pemenuhan kebutuhan psikologis dasar—otonomi, kompetensi, dan keterkaitan—berkorelasi dengan peningkatan motivasi belajar. Kontribusi teoritis ini diharapkan dapat menjadi referensi bagi studi-studi selanjutnya mengenai integrasi teknologi AI dalam pendidikan digital.

2. ### **Manfaat Praktis**

	Penelitian ini memberikan solusi inovatif bagi pelajar, pengembang platform, dan pendidik. Bagi pelajar, implementasi AI Agent yang menghasilkan konten pembelajaran yang personal dan adaptif diharapkan dapat meningkatkan motivasi serta keterlibatan belajar. Pengembang platform mendapatkan panduan teknis dalam merancang sistem pembelajaran digital yang responsif dan efisien, sementara pendidik dapat memanfaatkan temuan ini untuk menyusun materi yang lebih relevan dan disesuaikan dengan kebutuhan siswa di bidang pengembangan software dasar. Dengan demikian, penelitian ini mendukung peningkatan kualitas pembelajaran digital secara spesifik dalam konteks pengembangan software dasar.

####

# **DAFTAR PUSTAKA**
Al-Saqqa, S., Sawalha, S., Abdelnabi, H., 2020. Agile software development: Methodologies and trends. International Journal of Interactive Mobile Technologies 14, 246–270. https://doi.org/10.3991/ijim.v14i11.13269
Binhammad, M.H.Y., Othman, A., Abuljadayel, L., Mheiri, H.A., Alkaabi, M., Almarri, M., 2024. Investigating How Generative AI Can Create Personalized Learning Materials Tailored to Individual Student Needs. Creative Education 15, 1499–1523. https://doi.org/10.4236/ce.2024.157091
Chaparro, E., Restrepo-Calle, F., Ramírez-Echeverry, J.J., 2021. Learning analytics in computer programming courses.
Chiu, T.K.F., 2022. Applying the self-determination theory (SDT) to explain student engagement in online learning during the COVID-19 pandemic. Journal of Research on Technology in Education 54, S14–S30. https://doi.org/10.1080/15391523.2021.1891998
Dhawan, S., 2020. Online Learning: A Panacea in the Time of COVID-19 Crisis. Journal of Educational Technology Systems 49, 5–22. https://doi.org/10.1177/0047239520934018
Essa, S.G., Celik, T., Human-Hendricks, N.E., 2023. Personalized Adaptive Learning Technologies Based on Machine Learning Techniques to Identify Learning Styles: A Systematic Literature Review. IEEE Access 11, 48392–48409. https://doi.org/10.1109/ACCESS.2023.3276439
Gutiérrez, L., 2023. Artificial Intelligence in Language Education: Navigating the Potential and Challenges of Chatbots and NLP. Research Studies in English Language Teaching and Learning 1, 180–191. https://doi.org/10.62583/rseltl.v1i3.44
Ifenthaler, D., Yau, J.Y.K., 2020. Utilising learning analytics to support study success in higher education: a systematic review. Educational Technology Research and Development 68, 1961–1990. https://doi.org/10.1007/s11423-020-09788-z
Isiaku, L., Muhammad, A.S., Kefas, H.I., Ukaegbu, F.C., 2024. Enhancing technological sustainability in academia: leveraging ChatGPT for teaching, learning and evaluation. Quality Education for All.
Istrate, O., 2024. AI Agents in Education: An Early Systematic Review of Emerging Roles, Potential, and Limitations. Revista de Pedagogie Digitala 3, 24–30. https://doi.org/10.61071/RPD.2496
J., N.U., L., B.-N.C., O,  jelabi E.O., O., O., E., Atalor.P., Y., Y., T., A.A., C., N.E., E., E., A, O.O., 2024. A Systematic Review of Generative AI in Education. Journal of Computer Sciences and Applications 12, 25–30. https://doi.org/10.12691/jcsa-12-1-4
Jian, M.J.K.O., 2023. Personalized learning through AI. Advances in Engineering Innovation 5, 16–19. https://doi.org/10.54254/2977-3903/5/2023039
Kanchon, M.K.H., Sadman, M., Nabila, K.F., Tarannum, R., Khan, R., 2024. Enhancing personalized learning: AI-driven identification of learning styles and content modification strategies. International Journal of Cognitive Computing in Engineering 5, 269–278. https://doi.org/10.1016/j.ijcce.2024.06.002
Kridatama, J., Pemanfaatan, S.D.T., n.d. Pemanfaatan Artificial Intelligence pada Pembelajaran dan Asesmen di Era Digitalisasi, Artificial Intelligence pada Pembelajaran dan Asesmen di Era Digitalisasi.
Lindström, C.W.J., Vishkaei, B.M., Giovanni, P.D., 2024. Subscription-based business models in the context of tech firms: theory and applications. International Journal of Industrial Engineering and Operations Management 6, 256–274. https://doi.org/10.1108/ijieom-06-2023-0054
Martínez-Fernández, S., Bogner, J., Franch, X., Oriol, M., Siebert, J., Trendowicz, A., Vollmer, A.M., Wagner, S., 2021. Software Engineering for AI-Based Systems: A Survey. https://doi.org/10.1145/3487043
Plooy, E. du, Casteleijn, D., Franzsen, D., 2024. Personalized adaptive learning in higher education: A scoping review of key characteristics and impact on academic performance and engagement. Heliyon 10, e39630. https://doi.org/10.1016/j.heliyon.2024.e39630
Polat, H., 2023. Transforming Education with Artificial Intelligence: Shaping the Path Forward.
Sandhu, R., Channi, H.K., Ghai, D., Cheema, G.S., Kaur, M., 2024. An introduction to generative AI tools for education 2030, in: Integrating Generative AI in Education to Achieve Sustainable Development Goals. IGI Global, pp. 1–28.
Schwaber, K., Sutherland, J., 2020. The Scrum Guide The Definitive Guide to Scrum: The Rules of the Game.
Shaumiwaty, S., Chakim, M.H.R., Nurhaeni, H., Victorianda, 2025. Enhancing Personalized Learning Using Artificial Intelligence and Machine Learning Approaches. Blockchain Frontier Technology 4, 156–170. https://doi.org/10.34306/bfront.v4i2.715
Strielkowski, W., Grebennikova, V., Lisovskiy, A., Rakhimova, G., Vasileva, T., 2024. AI-driven adaptive learning for sustainable educational transformation. Sustainable Development.
Wakjira, A., Bhattacharya, S., 2021. Predicting Student Engagement in the Online Learning Environment. International Journal of Web-Based Learning and Teaching Technologies 16. https://doi.org/10.4018/IJWLTT.287095
Werang, B.R., Leba, S.M.R., 2022. Factors Affecting Student Engagement in Online Teaching and Learning: A Qualitative Case Study. Qualitative Report 27, 555–577. https://doi.org/10.46743/2160-3715/2022.5165
