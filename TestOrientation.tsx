import { useState } from 'react';
import { Link } from 'react-router-dom';
import { testQuestions, getStationById } from '@/data/stations';
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';

export function TestOrientation() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (stationIds: number[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = stationIds[0];
    setAnswers(newAnswers);

    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    const counts: { [key: number]: number } = {};
    answers.forEach((stationId) => {
      counts[stationId] = (counts[stationId] || 0) + 1;
    });

    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const primaryStation = parseInt(sorted[0][0]);
    const secondaryStation = sorted[1] ? parseInt(sorted[1][0]) : null;

    return { primaryStation, secondaryStation };
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const { primaryStation, secondaryStation } = showResult ? calculateResult() : { primaryStation: null, secondaryStation: null };
  const primaryStationData = primaryStation ? getStationById(primaryStation) : null;
  const secondaryStationData = secondaryStation ? getStationById(secondaryStation) : null;

  if (showResult && primaryStationData) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="text-center mb-8">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: primaryStationData.colors.primary }}
                >
                  {primaryStationData.id}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Tu punto de entrada recomendado:
                </h2>
                <h3 className="text-2xl font-bold" style={{ color: primaryStationData.colors.primary }}>
                  {primaryStationData.name}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-700 text-center mb-4">
                  "{primaryStationData.essence}"
                </p>
                <p className="text-gray-600 text-center">
                  {primaryStationData.description}
                </p>
              </div>

              {secondaryStationData && (
                <div className="text-center mb-8">
                  <p className="text-gray-500 mb-2">También podría interesarte:</p>
                  <Link 
                    to={`/estaciones/${secondaryStationData.slug}`}
                    className="inline-flex items-center gap-2 font-medium hover:underline"
                    style={{ color: secondaryStationData.colors.primary }}
                  >
                    {secondaryStationData.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}

              <div className="border-t pt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  🎁 Recibe tu guía gratuita
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Déjanos tu email y te enviaremos recursos específicos para {primaryStationData.name}.
                </p>

                <form onSubmit={handleSubmitEmail} className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu email..."
                      required
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#704214]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#704214] text-white font-bold rounded-lg hover:bg-[#8B4513] transition-colors"
                    >
                      Enviar
                    </button>
                  </div>
                </form>

                <p className="text-xs text-gray-400 text-center mt-4">
                  No enviamos spam. Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¡Gracias por unirte!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Hemos enviado tu guía de <strong>{primaryStationData.name}</strong> a <strong>{email}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={`/estaciones/${primaryStationData.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full font-bold hover:opacity-90 transition-colors"
                  style={{ backgroundColor: primaryStationData.colors.primary }}
                >
                  Explorar {primaryStationData.name}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const question = testQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#704214] to-[#8B4513] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#C5B358]" />
            <span className="text-sm font-medium text-white">Test de Orientación</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Por dónde empiezo?
          </h1>
          <p className="text-lg text-white/80">
            No necesitas saber tu tipo de Eneagrama. Solo necesitas honestidad sobre dónde te duele ahora.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Pregunta {currentQuestion + 1} de {testQuestions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / testQuestions.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#C5B358] transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / testQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.stations)}
                className="w-full text-left p-4 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all hover:translate-x-1 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          {currentQuestion > 0 && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <button
                onClick={handlePrevious}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Pregunta anterior
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <p className="text-center text-white/60 text-sm mt-8">
          💡 Este test no determina tu tipo de Eneagrama. Te orienta hacia la estación que puede acompañarte mejor en este momento.
        </p>
      </div>
    </div>
  );
}
