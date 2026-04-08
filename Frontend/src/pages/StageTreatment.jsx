import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function StageTreatment() {
  const { stageId } = useParams(); // Gets the stage number from the URL
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Added all the form data states from Predict.jsx (omitted Age as it's not needed for suggestions)
  const [formData, setFormData] = useState({
    Genetics: '',
    'Hormonal Changes': '',
    'Medical Conditions': '',
    'Medications & Treatments': '',
    'Nutritional Deficiencies': '',
    Stress: '',
    'Poor Hair Care Habits': '',
    'Environmental Factors': '',
    Smoking: '',
    'Weight Loss': '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Create a copy of the form data
    const payloadToSend = {
        ...formData,
        Stage: stageId // Pass the stage down to the backend!
    };

    // 2. CONVERT COMPLEX DROPDOWNS TO "Yes"
    if (payloadToSend['Medical Conditions'] !== 'No' && payloadToSend['Medical Conditions'] !== '') {
        payloadToSend['Medical Conditions'] = 'Yes';
    }
    
    if (payloadToSend['Medications & Treatments'] !== 'No' && payloadToSend['Medications & Treatments'] !== '') {
        payloadToSend['Medications & Treatments'] = 'Yes';
    }

    try {
      // 3. Connect to the suggestions endpoint
      const response = await fetch('http://localhost:5000/get_suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadToSend),
      });

      const data = await response.json();
      
      // 4. ONLY set suggestions here!
      setSuggestions(data.suggestions);
      
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Failed to connect to the backend. Make sure your Flask app is running!");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-brand-bg py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-brand-text">
            Stage {stageId} <span className="text-brand-green">Action Plan</span>
          </h1>
          <p className="mt-4 text-brand-muted">Tell us about your lifestyle so we can tailor your treatment plan.</p>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-white p-8 shadow-card">
             <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Grid for Yes/No Questions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* 2. Genetics */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Family History of Baldness (Genetics)</label>
                    <select name="Genetics" required value={formData.Genetics} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* 3. Hormonal Changes */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Recent Hormonal Changes</label>
                    <select name="Hormonal Changes" required value={formData['Hormonal Changes']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* 8. Poor Hair Care Habits */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Poor Hair Care Habits</label>
                    <select name="Poor Hair Care Habits" required value={formData['Poor Hair Care Habits']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes (Tight styling, excessive heat, harsh chemicals)</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* 9. Environmental Factors */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Harsh Environmental Factors</label>
                    <select name="Environmental Factors" required value={formData['Environmental Factors']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes (Hard water, high pollution)</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* 10. Smoking */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Do you smoke?</label>
                    <select name="Smoking" required value={formData.Smoking} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* 11. Weight Loss */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Significant Recent Weight Loss</label>
                    <select name="Weight Loss" required value={formData['Weight Loss']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {/* 6. Stress */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Current Stress Level</label>
                    <select name="Stress" required value={formData.Stress} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="Low">Low</option>
                      <option value="Moderate">Moderate</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <hr className="border-brand-border my-6" />

                {/* Complex Dropdowns */}
                <div className="space-y-6">
                  {/* 4. Medical Conditions */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Medical Conditions</label>
                    <select name="Medical Conditions" required value={formData['Medical Conditions']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="No">None</option>
                      <option value="Alopecia Areata">Alopecia Areata</option>
                      <option value="Thyroid Problems">Thyroid Problems</option>
                      <option value="Scalp Infection">Scalp Infection</option>
                      <option value="Psoriasis">Psoriasis</option>
                      <option value="Dermatitis">Dermatitis</option>
                    </select>
                  </div>

                  {/* 5. Medications & Treatments */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Medications & Treatments</label>
                    <select name="Medications & Treatments" required value={formData['Medications & Treatments']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="No">None</option>
                      <option value="Chemotherapy">Chemotherapy</option>
                      <option value="Heart Medication">Heart Medication</option>
                      <option value="Antidepressants">Antidepressants</option>
                      <option value="Steroids">Steroids</option>
                    </select>
                  </div>

                  {/* 7. Nutritional Deficiencies */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-2">Nutritional Deficiencies</label>
                    <select name="Nutritional Deficiencies" required value={formData['Nutritional Deficiencies']} onChange={handleChange} className="w-full rounded-xl border border-brand-border bg-brand-white px-4 py-3 text-sm focus:border-brand-green focus:outline-none transition duration-300">
                      <option value="" disabled>Select an option</option>
                      <option value="No">None</option>
                      <option value="Iron deficiency">Iron deficiency</option>
                      <option value="Vitamin D deficiency">Vitamin D deficiency</option>
                      <option value="Biotin deficiency">Biotin deficiency</option>
                      <option value="Omega-3 fatty acid deficiency">Omega-3 fatty acid deficiency</option>
                    </select>
                  </div>
                </div>

                <button type="submit" disabled={isLoading} className="w-full bg-brand-green text-brand-white font-semibold p-4 rounded-xl mt-4 hover:brightness-95 transition disabled:opacity-70">
                  {isLoading ? 'Generating Plan...' : 'Get My Suggestions'}
                </button>
             </form>

             {/* Results Area */}
             {suggestions && suggestions.length > 0 && (
                <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                    <h3 className="text-xl font-semibold text-brand-text mb-4">Your Custom Treatment Plan (Stage {stageId})</h3>
                    <ul className="space-y-3">
                      {suggestions.map((s, i) => (
                        <li key={i} className="flex gap-3 text-sm text-brand-muted leading-relaxed">
                          <span className="text-brand-green mt-1">✓</span> 
                          {s}
                        </li>
                      ))}
                    </ul>
                </div>
             )}
        </div>
      </div>
    </div>
  );
}