import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

// Pricing data from CSV
const PRICING_DATA = {
  negativeAccounts: [
    { count: 1, total: 500 },
    { count: 2, total: 700 },
    { count: 3, total: 750 },
    { count: 4, total: 800 },
    { count: 5, total: 850 },
    { count: 6, total: 750 },
    { count: 7, total: 850 },
    { count: 8, total: 1000 },
    { count: 9, total: 950 },
    { count: 10, total: 1000 },
    { count: 11, total: 1100 },
    { count: 12, total: 1200 },
    { count: 13, total: 1300 },
    { count: 14, total: 1400 },
    { count: 15, total: 1500 },
    { count: 16, total: 1600 },
    { count: 17, total: 1700 },
    { count: 18, total: 1800 },
    { count: 19, total: 1900 },
    { count: 20, total: 2000 },
    { count: 21, total: 2100 },
    { count: 22, total: 2200 },
    { count: 23, total: 2300 },
    { count: 24, total: 2400 },
    { count: 25, total: 2500 },
    { count: 26, total: 2600 },
    { count: 27, total: 2700 },
    { count: 28, total: 2800 },
    { count: 29, total: 2900 },
    { count: 30, total: 3000 },
  ],
  inquiries: {
    low: { min: 0, max: 15, cost: 200 },
    high: { min: 16, max: 30, cost: 250 },
  },
  bankruptcy: 1500,
  monthlyPlan: 120,
};

const Calculator = () => {
  const [negativeAccountsInput, setNegativeAccountsInput] = useState("0");
  const [inquiriesInput, setInquiriesInput] = useState("0");
  const [bankruptcy, setBankruptcy] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [results, setResults] = useState({
    negativeCost: 0,
    inquiriesCost: 0,
    bankruptcyCost: 0,
    total: 0,
    monthlyMonths: 0,
  });
  const [error, setError] = useState("");

  const calculateCost = () => {
    setError("");
    const negativeAccounts = parseInt(negativeAccountsInput || "0");
    const inquiries = parseInt(inquiriesInput || "0");

    // Validation
    if (negativeAccounts < 0 || inquiries < 0) {
      setError("Los valores no pueden ser negativos");
      return;
    }

    if (negativeAccounts > 30) {
      setError("Máximo 30 cuentas negativas");
      return;
    }

    if (inquiries > 30) {
      setError("Máximo 30 inquiries");
      return;
    }

    let negativeCost = 0;
    let inquiriesCost = 0;
    let bankruptcyCost = 0;

    // Calculate negative accounts cost
    if (negativeAccounts > 0) {
      const pricing = PRICING_DATA.negativeAccounts.find(
        (p) => p.count === negativeAccounts
      );
      if (pricing) {
        negativeCost = pricing.total;
      }
    }

    // Calculate inquiries cost (only if no negative accounts)
    if (negativeAccounts === 0 && inquiries > 0) {
      if (inquiries >= PRICING_DATA.inquiries.low.min && inquiries <= PRICING_DATA.inquiries.low.max) {
        inquiriesCost = PRICING_DATA.inquiries.low.cost;
      } else if (inquiries >= PRICING_DATA.inquiries.high.min && inquiries <= PRICING_DATA.inquiries.high.max) {
        inquiriesCost = PRICING_DATA.inquiries.high.cost;
      }
    }

    // Calculate bankruptcy cost
    if (bankruptcy) {
      bankruptcyCost = PRICING_DATA.bankruptcy;
    }

    const total = negativeCost + inquiriesCost + bankruptcyCost;
    const monthlyMonths = Math.ceil(total / PRICING_DATA.monthlyPlan);

    setResults({
      negativeCost,
      inquiriesCost,
      bankruptcyCost,
      total,
      monthlyMonths,
    });
    setCalculated(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Logo />
      
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 gradient-text-blue">
            Calculadora de Costos de Reparación de Crédito
          </h1>
          <p className="text-white/60 text-center mb-8">Adacoys Consulting</p>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Número de cuentas negativas (0-30)
              </label>
              <Input
                type="number"
                min="0"
                max="30"
                value={negativeAccountsInput}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9]/g, "");
                  setNegativeAccountsInput(v);
                }}
                onBlur={() => {
                  let n = parseInt(negativeAccountsInput || "0");
                  if (isNaN(n) || n < 0) n = 0;
                  if (n > 30) n = 30;
                  setNegativeAccountsInput(String(n));
                }}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2 font-medium">
                Número de inquiries (0-30)
              </label>
              <Input
                type="number"
                min="0"
                max="30"
                value={inquiriesInput}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9]/g, "");
                  setInquiriesInput(v);
                }}
                onBlur={() => {
                  let n = parseInt(inquiriesInput || "0");
                  if (isNaN(n) || n < 0) n = 0;
                  if (n > 30) n = 30;
                  setInquiriesInput(String(n));
                }}
                className="bg-white/5 border-white/10 text-white"
              />
              {parseInt(negativeAccountsInput || "0") > 0 && (
                <p className="text-sm text-green-400 mt-2">
                  ℹ️ Los inquiries están incluidos en las disputas de cuentas negativas - sin costo adicional
                </p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="bankruptcy"
                checked={bankruptcy}
                onCheckedChange={(checked) => setBankruptcy(checked as boolean)}
                className="border-white/20"
              />
              <label htmlFor="bankruptcy" className="text-white/80 font-medium cursor-pointer">
                Gestión de bancarrota (+$1,500)
              </label>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
              <p className="text-red-300">{error}</p>
            </div>
          )}

          <Button
            onClick={calculateCost}
            className="w-full bg-[#00CC66] hover:bg-[#00aa55] text-white text-lg py-6 rounded-xl transition-all duration-300 hover:scale-105"
            size="lg"
          >
            Calcular Costo
          </Button>

          {calculated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6"
            >
              <div className="bg-gradient-to-br from-[#00CC66]/20 to-[#00CC66]/5 border border-[#00CC66]/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-center mb-4">Costo Total</h2>
                <p className="text-5xl font-bold text-center text-[#00CC66]">
                  ${results.total.toLocaleString()} USD
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl space-y-3">
                <h3 className="font-bold text-lg mb-4">Desglose:</h3>
                {results.negativeCost > 0 && (
                  <>
                    {Array.from({ length: parseInt(negativeAccountsInput || "0") }).map((_, index) => {
                      const costPerAccount = Math.round(results.negativeCost / parseInt(negativeAccountsInput || "1"));
                      return (
                        <div key={index} className="flex justify-between">
                          <span className="text-white/60">Cuenta negativa {index + 1}:</span>
                          <span className="text-white font-medium">${costPerAccount.toLocaleString()}</span>
                        </div>
                      );
                    })}
                  </>
                )}
                {results.inquiriesCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Inquiries:</span>
                    <span className="text-white font-medium">${results.inquiriesCost.toLocaleString()}</span>
                  </div>
                )}
                {results.bankruptcyCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Bancarrota:</span>
                    <span className="text-white font-medium">${results.bankruptcyCost.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="glass-card p-6 rounded-xl space-y-4">
                <h3 className="font-bold text-lg">Opciones de Pago:</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#00CC66] font-bold">📅</span>
                    <div>
                      <p className="font-medium">Plan Mensual: $120/mes</p>
                      <p className="text-sm text-white/60">
                        Estimado: {results.monthlyMonths} meses
                      </p>
                      <p className="text-xs text-white/40 mt-1">
                        El proceso continúa hasta pagar el total. El trabajo comienza inmediatamente.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-[#00CC66] font-bold">⚡</span>
                    <div>
                      <p className="font-medium">Plan VIP: ${results.total.toLocaleString()} (pago completo)</p>
                      <p className="text-xs text-white/40 mt-1">
                        Cambios estimados en 30-90 días.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-white/50">
                <p>
                  <strong>Descargo de responsabilidad:</strong> Esta es una estimación basada en precios estándar. 
                  Los costos reales pueden variar. Consulte a Adacoys Consulting para una cotización personalizada. 
                  Incluye errores de información personal e inquiries en disputas cuando corresponda.
                </p>
              </div>

              <div className="flex gap-4">
                <Link to="/" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full glass-card text-white/80 hover:text-white"
                  >
                    Volver al Inicio
                  </Button>
                </Link>
                <Link to="/#contact" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-white/60 hover:text-white/80 transition-colors">
            ← Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
