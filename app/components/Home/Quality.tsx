import React from "react";
import Container from "./Container";
import { FaEuroSign, FaCheck, FaStar } from "react-icons/fa";

const Quality = () => {
  return (
    <section className="flex flex-col items-center py-6">
      <Container>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-slate-200 p-8 rounded-lg shadow-xl">
            <FaStar size={60} />
            <h1 className="text-3xl mt-8 mb-4 font-bold">Ποιότητα</h1>
            <p className="text-center">
              Η ποιότητα είναι η ουσία της δέσμευσής μας. Υποσχόμαστε υπηρεσίες υψηλής ποιότητας με αφοσίωση σε κάθε στάδιο, από το σχεδιασμό μέχρι
              την παραγωγή. Διασφαλίζουμε ότι τα οι υπηρεσίες μας πληρούν αυστηρά πρότυπα, προσφέροντας αξιοπιστία και ασφάλεια.
            </p>
          </div>
          <div className="flex flex-col items-center bg-slate-200 p-8 rounded-lg shadow-xl">
            <FaCheck size={60} />
            <h1 className="text-3xl mt-8 mb-4 font-bold">Αξιοπιστία</h1>
            <p className="text-center">
              Οι υπηρεσίες μας έχουν σχεδιαστεί για να αποδίδουν με συνέπεια, ικανοποιώντας τις προσδοκίες σας κάθε φορά. Με ιστορικό αξιοπιστίας,
              διασφαλίζουμε ότι μπορείτε να βασιστείτε σε εμάς για τις ανάγκες σας, παρέχοντας ηρεμία και εμπιστοσύνη.
            </p>
          </div>
          <div className="flex flex-col items-center bg-slate-200 p-8 rounded-lg shadow-xl">
            <FaEuroSign size={60} />
            <h1 className="text-3xl mt-8 mb-4 font-bold">Οικονομία</h1>
            <p className="text-center">
              Στην [Company], πιστεύουμε σε έξυπνες επιλογές που δεν θέτουν σε κίνδυνο τον προϋπολογισμό σας. Οι οικονομικές μας λύσεις παρέχουν
              ασυναγώνιστη αξία χωρίς να θυσιάζουν την ποιότητα ή την αξιοπιστία.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Quality;
