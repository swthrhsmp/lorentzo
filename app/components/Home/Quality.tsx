import React from "react";
import Container from "./Container";
import { GoChecklist } from "react-icons/go";
import { FaEuroSign } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Quality = () => {
  return (
    <section className="flex flex-col items-center py-6">
      <Container>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-slate-200 p-8 rounded-lg shadow-xl">
            <GoChecklist size={60} />
            <h1 className="text-3xl mt-8 mb-4 font-bold">Ποιότητα</h1>
            <p className="text-center">
              Η ποιότητα είναι η ουσία της δέσμευσής μας. Υποσχόμαστε υπηρεσίες υψηλής ποιότητας, ξεπερνώντας τις προσδοκίες μέσω της αφοσίωσης σε
              κάθε στάδιο, από το σχεδιασμό μέχρι την παραγωγή. Με υπερηφάνεια για την τεχνογνωσία μας, διασφαλίζουμε ότι τα οι υπηρεσίες μας πληρούν
              αυστηρά πρότυπα, προσφέροντας αξιοπιστία και ασφάλεια.
            </p>
          </div>
          <div className="flex flex-col items-center bg-slate-200 p-8 rounded-lg shadow-xl">
            <FaCheck size={60} />
            <h1 className="text-3xl mt-8 mb-4 font-bold">Αξιοπιστία</h1>
            <p className="text-center">
              Η αξιοπιστία είναι η βάση μας. Προσπαθούμε για σταθερή απόδοση, παρέχοντας υπηρεσίες που μπορείτε να εμπιστευτείτε. Από στιβαρά σχέδια
              έως ακριβή κατασκευή, στοχεύουμε να είμαστε ένας αξιόπιστος συνεργάτης, χτίζοντας διαρκείς σχέσεις βασισμένες στην εμπιστοσύνη και την
              αξιοπιστία.
            </p>
          </div>
          <div className="flex flex-col items-center bg-slate-200 p-8 rounded-lg shadow-xl">
            <FaEuroSign size={60} />
            <h1 className="text-3xl mt-8 mb-4 font-bold">Οικονομία</h1>
            <p className="text-center">
              Η οικονομία είναι ο πυρήνας της φιλοσοφίας μας. Δίνουμε προτεραιότητα σε οικονομικά αποδοτικές λύσεις χωρίς συμβιβασμούς στην ποιότητα.
              Από την αποτελεσματική χρήση των πόρων έως τις απλοποιημένες διαδικασίες, προσφέρουμε ανταγωνιστικές τιμές, καθιστώντας τα προϊόντα μας
              προσβάσιμα σε ένα ευρύ φάσμα πελατών. Επιλέξτε οικονομία. Επιλέξτε προσιτή τιμή χωρίς συμβιβασμούς.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quality;
