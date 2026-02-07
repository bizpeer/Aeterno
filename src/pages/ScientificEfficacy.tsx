import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { clsx } from 'clsx';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    LineController,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export function ScientificEfficacy() {
    const { t } = useTranslation();
    const [mineralMode, setMineralMode] = useState<'concentration' | 'ratio'>('concentration');
    const [dashboardTab, setDashboardTab] = useState<'metabolic' | 'cardio' | 'skin' | 'fatigue'>('metabolic');

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 100;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Mineral Chart Data
    const mineralChartData = useMemo(() => {
        if (mineralMode === 'concentration') {
            return {
                labels: [
                    t('efficacy.minerals.roles.mg_label', 'Magnesium (Mg)'),
                    t('efficacy.minerals.roles.ca_label', 'Calcium (Ca)'),
                    t('efficacy.minerals.roles.k_label', 'Potassium (K)'),
                    t('efficacy.minerals.roles.na_label', 'Sodium (Na)')
                ],
                datasets: [
                    {
                        label: t('efficacy.minerals.labels.dsw', 'Deep Sea Water'),
                        data: [1200, 400, 300, 200],
                        backgroundColor: '#0ea5e9',
                        borderRadius: 6
                    },
                    {
                        label: t('efficacy.minerals.labels.surface', 'Surface Water'),
                        data: [130, 40, 38, 10500],
                        backgroundColor: '#94a3b8',
                        borderRadius: 6
                    }
                ]
            };
        } else {
            return {
                labels: [t('efficacy.minerals.tabs.ratio', 'Mg:Ca Ratio')],
                datasets: [
                    { label: t('efficacy.minerals.labels.dsw', 'Deep Sea Water'), data: [3], backgroundColor: '#0ea5e9', borderRadius: 6 },
                    { label: t('efficacy.minerals.labels.tap', 'Tap Water'), data: [0.5], backgroundColor: '#cbd5e1', borderRadius: 6 },
                    { label: t('efficacy.minerals.labels.milk', 'Milk'), data: [0.1], backgroundColor: '#fcd34d', borderRadius: 6 }
                ]
            };
        }
    }, [mineralMode, t]);

    // Dashboard Data
    const dashboardData = {
        metabolic: {
            title: t('efficacy.clinical.dash.metabolic.title'),
            desc: t('efficacy.clinical.dash.metabolic.desc'),
            badge: t('efficacy.clinical.dash.metabolic.badge'),
            stats: [
                { val: t('efficacy.clinical.dash.metabolic.stat1'), label: t('efficacy.clinical.dash.metabolic.stat1_label'), color: 'text-sky-600' },
                { val: t('efficacy.clinical.dash.metabolic.stat2'), label: t('efficacy.clinical.dash.metabolic.stat2_label'), color: 'text-teal-600' },
                { val: t('efficacy.clinical.dash.metabolic.mechanism'), label: t('efficacy.clinical.dash.metabolic.stat2_label'), color: 'text-slate-700', isMechanism: true } // Reuse label for "Core Mechanism" or hardcode
            ],
            chartType: 'bar' as const,
            chartData: {
                labels: [t('efficacy.clinical.labels.control', 'Control (Tap Water)'), t('efficacy.clinical.labels.dsw', 'DSW Cohort')],
                datasets: [{
                    label: t('efficacy.clinical.labels.weight_gain', 'Weight Gain (g)'),
                    data: [18.5, 17.2],
                    backgroundColor: ['#94a3b8', '#0ea5e9'],
                    borderRadius: 12
                }]
            }
        },
        cardio: {
            title: t('efficacy.clinical.dash.cardio.title'),
            desc: t('efficacy.clinical.dash.cardio.desc'),
            badge: t('efficacy.clinical.dash.cardio.badge'),
            stats: [
                { val: t('efficacy.clinical.dash.cardio.stat1'), label: t('efficacy.clinical.dash.cardio.stat1_label'), color: 'text-sky-600' },
                { val: t('efficacy.clinical.dash.cardio.stat2'), label: t('efficacy.clinical.dash.cardio.stat2_label'), color: 'text-teal-600' },
                { val: t('efficacy.clinical.dash.cardio.mechanism'), label: '', color: 'text-slate-700', isMechanism: true }
            ],
            chartType: 'line' as const,
            chartData: {
                labels: ['Week 0', 'Week 2', 'Week 4', 'Week 6', 'Week 8'],
                datasets: [{
                    label: t('efficacy.clinical.labels.cholesterol', 'Total Cholesterol (mg/dL)'),
                    data: [180, 175, 168, 155, 148],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            }
        },
        skin: {
            title: t('efficacy.clinical.dash.skin.title'),
            desc: t('efficacy.clinical.dash.skin.desc'),
            badge: t('efficacy.clinical.dash.skin.badge'),
            stats: [
                { val: t('efficacy.clinical.dash.skin.stat1'), label: t('efficacy.clinical.dash.skin.stat1_label'), color: 'text-sky-600' },
                { val: t('efficacy.clinical.dash.skin.stat2'), label: t('efficacy.clinical.dash.skin.stat2_label'), color: 'text-teal-600' },
                { val: t('efficacy.clinical.dash.skin.mechanism'), label: '', color: 'text-slate-700', isMechanism: true }
            ],
            chartType: 'bar' as const,
            chartData: {
                labels: ['Pre-Treatment', 'Week 2', 'Week 4', 'Week 6'],
                datasets: [{
                    label: t('efficacy.clinical.labels.skin_score', 'Clinical Skin Score (SCORAD)'),
                    data: [8.5, 6.2, 4.5, 3.1],
                    backgroundColor: '#6366f1',
                    borderRadius: 10
                }]
            }
        },
        fatigue: {
            title: t('efficacy.clinical.dash.fatigue.title'),
            desc: t('efficacy.clinical.dash.fatigue.desc'),
            badge: t('efficacy.clinical.dash.fatigue.badge'),
            stats: [
                { val: t('efficacy.clinical.dash.fatigue.stat1'), label: t('efficacy.clinical.dash.fatigue.stat1_label'), color: 'text-sky-600' },
                { val: t('efficacy.clinical.dash.fatigue.stat2'), label: t('efficacy.clinical.dash.fatigue.stat2_label'), color: 'text-teal-600' },
                { val: t('efficacy.clinical.dash.fatigue.mechanism'), label: '', color: 'text-slate-700', isMechanism: true }
            ],
            chartType: 'line' as const,
            chartData: {
                labels: ['Immediate', '15m', '30m', '60m'],
                datasets: [
                    {
                        label: t('efficacy.clinical.labels.tap_lactate', 'Tap Water (Lactate)'),
                        data: [12, 10, 8, 6],
                        borderColor: '#94a3b8',
                        borderDash: [5, 5],
                        tension: 0.3
                    },
                    {
                        label: t('efficacy.clinical.labels.dsw_lactate', 'DSW (Lactate)'),
                        data: [12, 8, 5, 2.5],
                        borderColor: '#eab308',
                        tension: 0.3
                    }
                ]
            }
        }
    };

    const currentDash = dashboardData[dashboardTab];

    return (
        <div className="bg-slate-50 font-sans text-slate-700 antialiased overflow-x-hidden pt-16">
            {/* Sticky Navigation */}
            <nav className="bg-white/90 backdrop-blur-md fixed top-16 left-0 right-0 z-40 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span className="text-2xl">🌊</span>
                            <span className="font-bold text-xl text-slate-900 tracking-tight">DSW Research</span>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('intro')} className="text-slate-500 hover:text-sky-600 font-medium text-sm py-5 transition-colors">Overview</button>
                            <button onClick={() => scrollToSection('minerals')} className="text-slate-500 hover:text-sky-600 font-medium text-sm py-5 transition-colors">Composition</button>
                            <button onClick={() => scrollToSection('clinical')} className="text-slate-500 hover:text-sky-600 font-medium text-sm py-5 transition-colors">Clinical Value</button>
                            <button onClick={() => scrollToSection('process')} className="text-slate-500 hover:text-sky-600 font-medium text-sm py-5 transition-colors">Production</button>
                        </div>
                        <button onClick={() => scrollToSection('clinical')} className="bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition">
                            Explore Data
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="intro" className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-slate-900 opacity-95"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="lg:w-3/4">
                        <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/30">
                            Academic Research Report
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                            {t('efficacy.hero.title').split('&')[0]} & <br />
                            <span className="text-sky-400">{t('efficacy.hero.title').split('&')[1]}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
                            {t('efficacy.hero.desc')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-sky-300 mb-2">{t('efficacy.hero.badges.temp')}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('efficacy.hero.badges.temp_label')}</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-sky-300 mb-2">{t('efficacy.hero.badges.ratio')}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('efficacy.hero.badges.ratio_label')}</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-sky-300 mb-2">{t('efficacy.hero.badges.purity')}</div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t('efficacy.hero.badges.purity_label')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-24 space-y-20">
                {/* Section 1: Mineral Composition Analysis */}
                <section id="minerals" className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-slate-900">{t('efficacy.minerals.title')}</h2>
                                <p className="text-slate-600 mt-3 text-lg">
                                    {t('efficacy.minerals.desc')}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl self-start">
                                <button
                                    onClick={() => setMineralMode('concentration')}
                                    className={clsx(
                                        "px-5 py-2.5 text-sm font-bold rounded-lg transition-all",
                                        mineralMode === 'concentration' ? "shadow-sm bg-white text-sky-700" : "text-slate-500 hover:text-slate-700"
                                    )}
                                >
                                    {t('efficacy.minerals.tabs.conc')}
                                </button>
                                <button
                                    onClick={() => setMineralMode('ratio')}
                                    className={clsx(
                                        "px-5 py-2.5 text-sm font-bold rounded-lg transition-all",
                                        mineralMode === 'ratio' ? "shadow-sm bg-white text-sky-700" : "text-slate-500 hover:text-slate-700"
                                    )}
                                >
                                    {t('efficacy.minerals.tabs.ratio')}
                                </button>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                            {/* Chart Area */}
                            <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                <div className="h-[300px] md:h-[350px] relative">
                                    <Bar
                                        data={mineralChartData}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: false,
                                            plugins: {
                                                legend: { position: 'top', labels: { font: { weight: 'bold' } } },
                                                tooltip: { mode: 'index', intersect: false }
                                            },
                                            scales: {
                                                y: { beginAtZero: true, grid: { color: '#f1f5f9' }, title: { display: mineralMode === 'ratio', text: mineralMode === 'ratio' ? 'Ratio Value' : '' } },
                                                x: { grid: { display: false } }
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Insights Panel */}
                            <div className="flex flex-col gap-6">
                                <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
                                    <h3 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
                                        <span>🧪</span> Lab Insight
                                    </h3>
                                    <p className="text-sm text-sky-800 leading-relaxed">
                                        {t('efficacy.minerals.lab_insight')}
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-800 text-xs mb-4 uppercase tracking-widest border-b pb-3">Elemental Roles</h4>
                                    <ul className="space-y-4 text-sm">
                                        <li className="flex gap-4">
                                            <span className="font-bold text-sky-600 bg-sky-50 w-10 h-10 flex items-center justify-center rounded-lg">Mg</span>
                                            <span className="text-slate-600 leading-tight pt-1">{t('efficacy.minerals.roles.mg')}</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="font-bold text-indigo-600 bg-indigo-50 w-10 h-10 flex items-center justify-center rounded-lg">Ca</span>
                                            <span className="text-slate-600 leading-tight pt-1">{t('efficacy.minerals.roles.ca')}</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="font-bold text-teal-600 bg-teal-50 w-10 h-10 flex items-center justify-center rounded-lg">K</span>
                                            <span className="text-slate-600 leading-tight pt-1">{t('efficacy.minerals.roles.k')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Clinical Efficacy Dashboard */}
                <section id="clinical">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <span className="text-sky-600 font-bold tracking-widest uppercase text-xs">Evidence-Based Medicine</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">{t('efficacy.clinical.title')}</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {t('efficacy.clinical.desc')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        {/* Navigation Tabs */}
                        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                            {(['metabolic', 'cardio', 'skin', 'fatigue'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setDashboardTab(tab)}
                                    className={clsx(
                                        "flex items-center gap-4 p-5 rounded-2xl text-left transition-all group min-w-[240px] border",
                                        dashboardTab === tab
                                            ? "bg-white border-sky-300 shadow-sm"
                                            : "bg-slate-50 border-transparent hover:bg-white hover:border-sky-300"
                                    )}
                                >
                                    <span className={clsx(
                                        "text-2xl p-3 rounded-xl group-hover:scale-110 transition",
                                        dashboardTab === tab ? "bg-slate-50" : "bg-slate-100"
                                    )}>
                                        {tab === 'metabolic' && '⚖️'}
                                        {tab === 'cardio' && '❤️'}
                                        {tab === 'skin' && '💧'}
                                        {tab === 'fatigue' && '⚡'}
                                    </span>
                                    <div>
                                        <div className={clsx("font-bold", dashboardTab === tab ? "text-slate-900" : "text-slate-600")}>
                                            {t(`efficacy.clinical.tabs.${tab}.title`)}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                            {t(`efficacy.clinical.tabs.${tab}.sub`)}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Main Dashboard View */}
                        <div className="lg:col-span-9 space-y-8">
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900">{currentDash.title}</h3>
                                        <p className="text-slate-600 mt-4 text-lg leading-relaxed">
                                            {currentDash.desc}
                                        </p>
                                    </div>
                                    <span className="px-4 py-1.5 bg-sky-100 text-sky-700 text-xs font-bold rounded-full whitespace-nowrap">
                                        {currentDash.badge}
                                    </span>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-100">
                                    {currentDash.stats.map((stat, idx) => (
                                        <div
                                            key={idx}
                                            className={clsx(
                                                "p-6 bg-slate-50 rounded-2xl text-center",
                                                stat.isMechanism ? "col-span-2 flex items-center justify-center gap-4 text-left" : ""
                                            )}
                                        >
                                            {stat.isMechanism ? (
                                                <div>
                                                    <div className="font-bold text-slate-700 text-sm">Key Mechanism</div>
                                                    <div className="text-xs text-slate-500 mt-1">{stat.val}</div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className={clsx("text-3xl font-bold", stat.color)}>{stat.val}</div>
                                                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-2 tracking-widest">{stat.label}</div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Chart Card */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-3">
                                    <span className="w-2 h-6 bg-sky-500 rounded-full"></span> Visualization of Study Data
                                </h4>
                                <div className="h-[300px] relative">
                                    {currentDash.chartType === 'bar' ? (
                                        <Bar
                                            data={currentDash.chartData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                animation: { duration: 1000, easing: 'easeOutQuart' },
                                                plugins: {
                                                    legend: { display: true, position: 'bottom' },
                                                    tooltip: { backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 12 }
                                                },
                                                scales: {
                                                    y: { beginAtZero: true, grid: { color: '#f8fafc' } },
                                                    x: { grid: { display: false } }
                                                }
                                            }}
                                        />
                                    ) : (
                                        <Line
                                            data={currentDash.chartData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                animation: { duration: 1000, easing: 'easeOutQuart' },
                                                plugins: {
                                                    legend: { display: true, position: 'bottom' },
                                                    tooltip: { backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 12 }
                                                },
                                                scales: {
                                                    y: { beginAtZero: false, grid: { color: '#f8fafc' } },
                                                    x: { grid: { display: false } }
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                                <p className="text-[10px] text-slate-400 text-center mt-6 italic">* Data normalized based on cohort averages reported in the cited studies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Process & Safety */}
                <section id="process">
                    <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

                        <div className="relative z-10">
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold mb-6">{t('efficacy.process.title')}</h2>
                                <p className="text-slate-400 max-w-2xl text-lg">
                                    {t('efficacy.process.desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                {(['intake', 'desalination', 'modulation', 'sterilization'] as const).map((step) => (
                                    <div key={step} className="hover:-translate-y-2 transition-transform duration-300 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                                        <div className="text-4xl mb-6">
                                            {step === 'intake' && '⚓'}
                                            {step === 'desalination' && '⚙️'}
                                            {step === 'modulation' && '⚗️'}
                                            {step === 'sterilization' && '📦'}
                                        </div>
                                        <h3 className="text-xl font-bold text-sky-300 mb-3">{t(`efficacy.process.steps.${step}.title`)}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{t(`efficacy.process.steps.${step}.desc`)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: References */}
                <section id="references" className="pt-12 pb-24">
                    <h3 className="text-2xl font-bold text-slate-900 mb-10 px-4">{t('efficacy.references.title')}</h3>
                    <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm mx-4 sm:mx-0">
                        <ul className="space-y-6 text-sm text-slate-600 font-serif pl-8 list-none">
                            <li className="relative pl-8 indent-[-2rem]">
                                Hwang, H. S., H. A. Kim, and S. H. Lee. "Anti-obesity and Anti-diabetic Effects of Deep Sea Water on ob/ob Mice." <i>Marine Biotechnology</i> 16, no. 4 (2014): 402–11.
                            </li>
                            <li className="relative pl-8 indent-[-2rem]">
                                Kim, Hee-Jin, and Chang-Keun Kim. "Effect of Deep Sea Water on Lipid Metabolism in High-Cholesterol Diet-Induced Hyperlipidemic Rats." <i>Journal of Medicinal Food</i> 21, no. 5 (2018): 455-63.
                            </li>
                            <li className="relative pl-8 indent-[-2rem]">
                                Miyamura, M., S. Yoshioka, and A. Hamada. "Difference between Deep Seawater and Surface Seawater in Mineral Components and Their Effects on Atopic Dermatitis-Like Skin Lesions in Mice." <i>Biological and Pharmaceutical Bulletin</i> 32, no. 6 (2009): 1091–97.
                            </li>
                            <li className="relative pl-8 indent-[-2rem]">
                                Stasiule, L., et al. "Deep Mineral Water Accelerates Recovery After Dehydrating Aerobic Exercise." <i>Journal of the International Society of Sports Nutrition</i> 11, no. 1 (2014): 34.
                            </li>
                            <li className="relative pl-8 indent-[-2rem]">
                                Yoshioka, S., A. Hamada, T. Cui, and J. Yokoyama. "Pharmacological Activity of Deep-Sea Water: Examination of Hyperlipemia Prevention and Medical Treatment Effect." <i>Biological and Pharmaceutical Bulletin</i> 26, no. 11 (2003): 1552–59.
                            </li>
                            <li className="relative pl-8 indent-[-2rem]">
                                Ministry of Oceans and Fisheries (Republic of Korea). "Annual Report on the Development of Deep Sea Water Resources." Sejong: MOF Press, 2022.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
