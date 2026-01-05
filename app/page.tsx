'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface BMIResult {
  bmi: number;
  category: string;
  categoryClass: string;
  recommendation: string;
  indicatorPosition: number;
}

export default function Home() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleNumericInput = (value: string): string => {
    let cleanedValue = value.replace(/[^0-9.,]/g, '');
    
    cleanedValue = cleanedValue.replace(',', '.');
    
    const parts = cleanedValue.split('.');
    if (parts.length > 2) {
      cleanedValue = parts[0] + '.' + parts.slice(1).join('');
    }
    
    return cleanedValue;
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = handleNumericInput(e.target.value);
    setWeight(value);
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = handleNumericInput(e.target.value);
    setHeight(value);
  };

  const calculateBMI = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const weightNum = parseFloat(weight.replace(',', '.'));
    const heightNum = parseFloat(height.replace(',', '.'));

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      setError('Data Tidak Boleh kosong atau harus lebih dari 0');
      return;
    }

    const bmi = weightNum / ((heightNum / 100) * (heightNum / 100));
    let category = '';
    let categoryClass = '';
    let recommendation = '';

    if (bmi < 16) {
      category = 'Sangat Kurus';
      categoryClass = 'very-thin';
      recommendation = 'Konsultasikan dengan dokter untuk program penambahan berat badan yang sehat. Fokus pada nutrisi yang bergizi dan olahraga ringan.';
    } else if (bmi >= 16 && bmi < 18.5) {
      category = 'Kurus';
      categoryClass = 'thin';
      recommendation = 'Tambah asupan kalori sehat dengan protein, karbohidrat kompleks, dan lemak sehat. Lakukan latihan kekuatan untuk membangun massa otot.';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal';
      categoryClass = 'normal';
      recommendation = 'Pertahankan pola hidup sehat! Lanjutkan diet seimbang dan olahraga teratur untuk menjaga berat badan ideal.';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Gemuk';
      categoryClass = 'overweight';
      recommendation = 'Kurangi asupan kalori dan tingkatkan aktivitas fisik. Fokus pada makanan bergizi dan olahraga kardio 150 menit per minggu.';
    } else {
      category = 'Obesitas';
      categoryClass = 'obese';
      recommendation = 'Konsultasikan dengan dokter untuk program penurunan berat badan yang aman. Kombinasikan diet sehat dengan olahraga teratur.';
    }

    let indicatorPosition = 0;
    if (bmi <= 16) indicatorPosition = (bmi / 16) * 16;
    else if (bmi <= 18.5) indicatorPosition = 16 + ((bmi - 16) / 2.5) * 21;
    else if (bmi <= 25) indicatorPosition = 37 + ((bmi - 18.5) / 6.5) * 13;
    else if (bmi <= 30) indicatorPosition = 50 + ((bmi - 25) / 5) * 10;
    else indicatorPosition = Math.min(95, 60 + ((bmi - 30) / 10) * 35);

    setResult({
      bmi,
      category,
      categoryClass,
      recommendation,
      indicatorPosition,
    });
  };

  return (
    <>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Health and Wellness"
        />
      </div>

      <div className="floating-decorations">
        <div className="floating-icon floating-icon-1">
          <i className="fas fa-heartbeat"></i>
        </div>
        <div className="floating-icon floating-icon-2">
          <i className="fas fa-dumbbell"></i>
        </div>
        <div className="floating-icon floating-icon-3">
          <i className="fas fa-apple-alt"></i>
        </div>
        <div className="floating-icon floating-icon-4">
          <i className="fas fa-running"></i>
        </div>
      </div>

      <div className="container">
        <div className="calculator-section">
          <form onSubmit={calculateBMI}>
            <div className='flex justify-center items-center'><i className="fa-solid fa-weight-scale"></i></div>
            <h1>
              Kalkulator IMT <br />
              (Indeks Massa Tubuh)
            </h1>

            <div id="result">
              {error && (
                <div className="error-message">
                  <i className="fa-solid fa-triangle-exclamation"></i> {error}
                </div>
              )}

              {result && (
                <div className="result-card">
                  <div className={`imt-value ${result.categoryClass}`}>
                    {result.bmi.toFixed(1)}
                  </div>
                  <div className={`imt-category ${result.categoryClass}`}>
                    {result.category}
                  </div>

                  <div className="imt-scale">
                    <div
                      className="imt-indicator"
                      style={{ left: `${result.indicatorPosition}%` }}
                    ></div>
                  </div>
                  <div className="scale-labels">
                    <span>&lt;16</span>
                    <span>16-18.5</span>
                    <span>18.5-25</span>
                    <span>25-30</span>
                    <span>&gt;30</span>
                  </div>

                  <div className="recommendation-card">
                    <h4>
                      <i className="fa-solid fa-lightbulb"></i> Rekomendasi
                      Kesehatan
                    </h4>
                    <p>{result.recommendation}</p>
                  </div>

                  <div className="health-tip">
                    <i className="fa-solid fa-heart"></i> Tips: Konsultasikan
                    dengan dokter atau ahli gizi untuk mendapatkan program
                    kesehatan yang tepat sesuai kondisi Anda.
                  </div>
                </div>
              )}
            </div>

            <div className="input">
              <input
                type="text"
                name="BB"
                placeholder="Berat Badan (kg)"
                inputMode="decimal"
                value={weight}
                onChange={handleWeightChange}
              />
              <input
                type="text"
                name="TB"
                placeholder="Tinggi Badan (cm)"
                inputMode="decimal"
                value={height}
                onChange={handleHeightChange}
              />
              <input type="submit" value="Hitung IMT" />
            </div>
          </form>
        </div>

        <div className="image-section">
          <div className="floating-image">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Health Dashboard"
            />
            <div className="image-overlay">
              <h3>
                <i className="fas fa-heart"></i> Jaga Kesehatan Tubuh
              </h3>
              <p>Monitor IMT Anda secara rutin untuk hidup yang lebih sehat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
