import ImgWithText from "../components/Shared/ImgWithText";
import background from "@/public/assets/services.jpg";
import Container from "../components/Home/Container";
import Card from "../components/Shared/Card";
import stampotoImg from "@/public/assets/services/stampoto.jpg";
import viomixanikoImg from "@/public/assets/services/viomixaniko.jpg";
import tsimentokoniaImg from "@/public/assets/services/tsimentokonia.jpg";
import rampaImg from "@/public/assets/services/rampa.jpg";
import Divider from "../components/Shared/Divider";

const services = () => {
  return (
    <section className="flex flex-col items-center">
      <ImgWithText bgSrc={background.src}>Υπηρεσίες</ImgWithText>
      <Container>
        <div className="p-2 md:p-4">
          <Divider />
          <Card>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[50%] h-[200px] md:h-[300px]">
                <img src={stampotoImg.src} className="object-cover w-full h-full " />
              </div>
              <div className="w-full md:w-[50%] py-4 px-8 flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-bold mb-4">Σταμωτό Δάπεδο</h1>
                <p className="mb-4">
                  Τα σταμπωτά δάπεδα είναι μια από τις πιο συνηθισμένες και γνωστές επιλογές για εξωτερικά διακοσμητικά δάπεδα υψηλής αντοχής, καθώς
                  προσφέρουν σημαντικά πλεονεκτήματα σε μια μεγάλη γκάμα εφαρμογών. Η μεγάλη αντοχή που τα διακρίνει σε συνδυασμό με το πραγματικά
                  καλαίσθητο αποτέλεσμα, τα έχει κάνει ιδανική επιλογή για πλακοστρώσεις εξωτερικών χώρων με υψηλές απαιτήσεις και μεγάλες
                  καταπονήσεις.
                </p>
              </div>
            </div>
          </Card>
          <Divider />
          <Card>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-[50%] py-4 px-8 flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-bold mb-4">Βιομηχανικό Δάπεδο</h1>
                <p className="mb-4">
                  Είναι ένα δάπεδο υψηλών αντοχών που δημιουργήθηκε για να καλύψει απαιτήσεις εργασιακών ή οικιακών χώρων στους οποίους υπάρχει
                  συνεχής χρήση και αυξανόμενη φθορά. Τα βιομηχανικά δάπεδα εφαρμόζονται σε βιομηχανίες, αποθήκες, εργοστάσια, χώρους στάθμευσης,
                  πρατήρια βενζίνης και οπουδήποτε αλλού υπάρχει η ανάγκη αυξημένης κάλυψης και προστασίας του δαπέδου με εξειδικευμένη τεχνική, έτσι
                  ώστε να αντέχει ισχυρά φορτία που δημιουργούν μεγάλες πιέσεις.
                </p>
              </div>
              <div className="w-full md:w-[50%] h-[200px] md:h-[300px]">
                <img src={viomixanikoImg.src} className="object-cover w-full h-full " />
              </div>
            </div>
          </Card>
          <Divider />
          <Card>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[50%] h-[200px] md:h-[300px]">
                <img src={tsimentokoniaImg.src} className="object-cover w-full h-full " />
              </div>
              <div className="w-full md:w-[50%] py-4 px-8 flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-bold mb-4">Πατητή Τσιμεντοκονία</h1>
                <p className="mb-4">
                  Η πατητη τσιμεντοκονια είναι ένα πρωτοποριακό και ιδιαίτερο υλικό. Πιο συγκεκριμένα, πρόκειται για ένα πλήρως φυσικό και οικολογικό
                  υλικό, που μπορεί να εφαρμοστεί σε δάπεδα, τοίχους, σκάλες, πάγκους, μπάνια και πισίνες. Η μοντέρνα εμφάνισή της μαζί με την υψηλή
                  αντοχή του υλικού την έχουν κάνει ιδιαίτερα αγαπητή στους αρχιτέκτονες, που την ενσωματώνουν όλο και περισσότερο στις νέες
                  κατασκευές τους.
                </p>
              </div>
            </div>
          </Card>
          <Divider />
          <Card>
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-[50%] py-4 px-8 flex flex-col items-center">
                <h1 className="text-xl md:text-2xl font-bold mb-4">Αντιολισθητικές Ράμπες</h1>
                <p className="mb-4">
                  Οι αντιολισθητικές ράμπες προτείνονται για χώρους υπογείων ή υπερυψωμένων γκαράζ και παρκινγκ, με στόχο την ασφαλέστερη και
                  ομαλότερη είσοδο ή έξοδο των οχημάτων.
                </p>
              </div>
              <div className="w-full md:w-[50%] h-[200px] md:h-[300px]">
                <img src={rampaImg.src} className="object-cover w-full h-full " />
              </div>
            </div>
          </Card>
          <Divider />
        </div>
      </Container>
    </section>
  );
};

export default services;
