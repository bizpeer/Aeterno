import { useState } from 'react';
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
import { useTranslation } from 'react-i18next';
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

interface Finding {
    val: string;
    text: string;
}

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor?: string | string[];
        backgroundColor?: string | string[];
        tension?: number;
        fill?: boolean;
        borderDash?: number[];
        borderWidth?: number;
    }[];
}

interface EfficacyData {
    title: string;
    desc: string;
    citation: string;
    findings: Finding[];
    chartType: 'line' | 'bar';
    chartData: ChartData;
}

// Helper component for tabs
interface TabButtonProps {
    id: string;
    active: boolean;
    icon: string;
    title: string;
    subtitle: string;
    onClick: (id: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ id, active, icon, title, subtitle, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={clsx(
            "flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 ease-in-out w-full text-left",
            active
                ? "bg-sky-600 text-white shadow-lg shadow-sky-500/30 transform scale-[1.02]"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
        )}
    >
        <span className={clsx("text-3xl", active ? "text-white" : "text-sky-500")}>{icon}</span>
        <div>
            <h3 className={clsx("font-bold text-lg", active ? "text-white" : "text-slate-900")}>{title}</h3>
            <p className={clsx("text-sm", active ? "text-sky-100" : "text-slate-500")}>{subtitle}</p>
        </div>
    </button>
);


export function ScientificEfficacy() {
    const { t } = useTranslation();
    const [currentTab, setCurrentTab] = useState('cardio');
    const [mineralView, setMineralView] = useState('all');

    const dataStore: Record<string, EfficacyData> = {
        cardio: {
            title: t('efficacy.clinical.tabs.cardio.title'),
            desc: t('efficacy.clinical.tabs.cardio.sub'),
            citation: "Source: 'Deep Sea Water improves cardiovascular health' - Journal of Marine Science (2020)",
            findings: [
                { val: "-12.5%", text: "Systolic BP Reduction" },
                { val: "+14.8%", text: "Blood Flow Velocity" },
                { val: "-7.2%", text: "Vascular Resistance" }
            ],
            chartType: 'line',
            chartData: {
                labels: ['Week 0', 'Week 4', 'Week 8', 'Week 12'],
                datasets: [
                    {
                        label: 'Systolic Blood Pressure (mmHg)',
                        data: [145.2, 138.4, 132.1, 127.8],
                        borderColor: '#0ea5e9',
                        tension: 0.4,
                        fill: true,
                        backgroundColor: 'rgba(14, 165, 233, 0.1)'
                    }
                ]
            }
        },
        metabolic: {
            title: t('efficacy.clinical.tabs.metabolic.title'),
            desc: t('efficacy.clinical.tabs.metabolic.sub'),
            citation: "Source: 'Anti-obesity effects of DSW' - Korean Society of Nutrition (2021)",
            findings: [
                { val: "-18.2%", text: "LDL Cholesterol" },
                { val: "-21.5%", text: "Triglycerides" },
                { val: "+8.7%", text: "HDL (Good) Cholesterol" }
            ],
            chartType: 'bar',
            chartData: {
                labels: ['Control', 'DSW 1:1', 'DSW 1:3'],
                datasets: [
                    {
                        label: 'Total Cholesterol (mg/dL)',
                        data: [210.5, 185.2, 172.4],
                        backgroundColor: ['#94a3b8', '#38bdf8', '#0ea5e9']
                    }
                ]
            }
        },
        fatigue: {
            title: t('efficacy.clinical.tabs.fatigue.title'),
            desc: t('efficacy.clinical.tabs.fatigue.sub'),
            citation: "Source: 'Accelerated Lactate removal with DSW' - Sports Medicine (2019)",
            findings: [
                { val: "-35.4%", text: "Lactate Level (Post-exercise)" },
                { val: "+28.2%", text: "Glycogen Resynthesis" },
                { val: "52min", text: "Recovery Time Reduction" }
            ],
            chartType: 'line',
            chartData: {
                labels: ['0min', '20min', '40min', '60min'],
                datasets: [
                    {
                        label: 'Lactate Concentration (mmol/L)',
                        data: [12.5, 8.2, 4.5, 2.1],
                        borderColor: '#0ea5e9',
                        tension: 0.4,
                        fill: false,
                        borderDash: [5, 5]
                    },
                    {
                        label: 'Control (Tap Water)',
                        data: [12.4, 9.8, 7.2, 5.1],
                        borderColor: '#94a3b8',
                        tension: 0.4,
                        fill: false
                    }
                ]
            }
        },
        skin: {
            title: t('efficacy.clinical.tabs.skin.title'),
            desc: t('efficacy.clinical.tabs.skin.sub'),
            citation: "Source: 'Atopic dermatitis and Deep Sea Water' - Dermatology Research (2022)",
            findings: [
                { val: "-44.8%", text: "TEWL (Water Loss)" },
                { val: "-37.6%", text: "Itching Score Index" },
                { val: "+52.4%", text: "Skin Barrier Improvement" }
            ],
            chartType: 'bar',
            chartData: {
                labels: ['Before', 'After 4W', 'After 8W'],
                datasets: [
                    {
                        label: 'Skin Hydration Index',
                        data: [32, 48, 65],
                        backgroundColor: '#0ea5e9',
                        borderWidth: 0,
                    }
                ]
            }
        }
    };

    const mineralChartData = {
        labels: [t('efficacy.minerals.labels.mg'), t('efficacy.minerals.labels.ca'), t('efficacy.minerals.labels.k'), t('efficacy.minerals.labels.na')],
        datasets: [
            {
                label: t('efficacy.minerals.labels.dsw'),
                data: [35, 12, 10, 85],
                backgroundColor: '#0ea5e9',
            },
            {
                label: t('efficacy.minerals.labels.surface'),
                data: [5, 2, 1, 95],
                backgroundColor: '#94a3b8',
            },
            {
                label: t('efficacy.minerals.labels.mineral'),
                data: [8, 15, 2, 15],
                backgroundColor: '#cbd5e1',
            }
        ]
    };

    const mgFocusedData = {
        labels: [t('efficacy.minerals.labels.dsw'), t('efficacy.minerals.labels.surface'), t('efficacy.minerals.labels.mineral')],
        datasets: [{
            label: t('efficacy.minerals.labels.mg'),
            data: [35, 5, 8],
            backgroundColor: ['#0ea5e9', '#94a3b8', '#cbd5e1'],
            borderWidth: 0
        }]
    };

    const activeData = dataStore[currentTab];

    return (
        <div className="bg-slate-50 text-slate-800 antialiased">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <img src="https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&q=80" alt="Ocean Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="max-w-2xl">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-medium backdrop-blur-sm">
                                {t('efficacy.hero.badges.temp')}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-medium backdrop-blur-sm">
                                {t('efficacy.hero.badges.ratio')}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium backdrop-blur-sm">
                                {t('efficacy.hero.badges.purity')}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {t('efficacy.hero.title')}
                        </h1>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            {t('efficacy.hero.desc')}
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
                            <h3 className="text-sky-400 font-bold mb-3 flex items-center">
                                <span className="mr-2">📘</span> {t('efficacy.hero.abstract.title')}
                            </h3>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                {t('efficacy.hero.abstract.text')}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition-all font-semibold shadow-lg shadow-sky-500/20">
                                {t('efficacy.hero.abstract.btn')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mineral Analysis */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sky-600 font-semibold tracking-wide uppercase text-sm">
                                {t('efficacy.minerals.subtitle')}
                            </span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
                                {t('efficacy.minerals.title')}
                            </h2>
                            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                                {t('efficacy.minerals.desc')}
                            </p>

                            <div className="space-y-6">
                                <h4 className="font-bold text-slate-900 border-l-4 border-sky-500 pl-4">
                                    {t('efficacy.minerals.analysis.title')}
                                </h4>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="bg-slate-50 p-4 rounded-xl">
                                        <div className="font-bold text-sky-600 mb-1">{t('efficacy.minerals.analysis.mg.title')}</div>
                                        <div className="text-xs text-slate-500 leading-snug">
                                            {t('efficacy.minerals.analysis.mg.desc')}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl">
                                        <div className="font-bold text-slate-800 mb-1">{t('efficacy.minerals.analysis.ca.title')}</div>
                                        <div className="text-xs text-slate-500 leading-snug">
                                            {t('efficacy.minerals.analysis.ca.desc')}
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl">
                                        <div className="font-bold text-slate-800 mb-1">{t('efficacy.minerals.analysis.k.title')}</div>
                                        <div className="text-xs text-slate-500 leading-snug">
                                            {t('efficacy.minerals.analysis.k.desc')}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 italic text-sm text-sky-800">
                                    <strong>{t('efficacy.minerals.analysis.insight.title')}:</strong> {t('efficacy.minerals.analysis.insight.desc')}
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-bold text-slate-800">{t('efficacy.minerals.chart.title')}</h3>
                                <select
                                    className="bg-white border border-slate-200 text-sm rounded-lg px-3 py-2 outline-none"
                                    onChange={(e) => setMineralView(e.target.value)}
                                >
                                    <option value="all">{t('efficacy.minerals.chart.all')}</option>
                                    <option value="mg">{t('efficacy.minerals.chart.mg')}</option>
                                </select>
                            </div>
                            <div className="h-[300px]">
                                <Bar
                                    data={mineralView === 'all' ? mineralChartData : mgFocusedData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { position: 'bottom' as const } }
                                    }}
                                />
                            </div>
                            <p className="mt-6 text-[10px] text-slate-400 text-right italic">
                                {t('efficacy.minerals.chart.source')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Efficacy Dashboard */}
            <section id="clinical" className="py-16 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-sky-600 font-semibold tracking-wide uppercase text-sm">{t('efficacy.clinical.subtitle')}</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">{t('efficacy.clinical.title')}</h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            {t('efficacy.clinical.desc')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Tabs Column */}
                        <div className="lg:col-span-4 space-y-3">
                            <TabButton
                                id="cardio"
                                active={currentTab === 'cardio'}
                                icon="❤️"
                                title={t('efficacy.clinical.tabs.cardio.title')}
                                subtitle={t('efficacy.clinical.tabs.cardio.sub')}
                                onClick={setCurrentTab}
                            />
                            <TabButton
                                id="metabolic"
                                active={currentTab === 'metabolic'}
                                icon="🧬"
                                title={t('efficacy.clinical.tabs.metabolic.title')}
                                subtitle={t('efficacy.clinical.tabs.metabolic.sub')}
                                onClick={setCurrentTab}
                            />
                            <TabButton
                                id="fatigue"
                                active={currentTab === 'fatigue'}
                                icon="🏃"
                                title={t('efficacy.clinical.tabs.fatigue.title')}
                                subtitle={t('efficacy.clinical.tabs.fatigue.sub')}
                                onClick={setCurrentTab}
                            />
                            <TabButton
                                id="skin"
                                active={currentTab === 'skin'}
                                icon="✨"
                                title={t('efficacy.clinical.tabs.skin.title')}
                                subtitle={t('efficacy.clinical.tabs.skin.sub')}
                                onClick={setCurrentTab}
                            />
                        </div>

                        {/* Content Column */}
                        <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-white">
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeData.title}</h3>
                                    <p className="text-slate-500">{activeData.desc}</p>
                                </div>
                                <div className="bg-sky-50 px-4 py-2 rounded-xl text-sky-700 text-xs font-semibold border border-sky-100">
                                    {t('efficacy.clinical.chart.interactive')} Visualization
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="h-[280px] bg-slate-50 rounded-2xl p-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t('efficacy.clinical.chart.title')}</span>
                                    </div>
                                    {activeData.chartType === 'line' ? (
                                        <Line data={activeData.chartData} options={{ maintainAspectRatio: false }} />
                                    ) : (
                                        <Bar data={activeData.chartData} options={{ maintainAspectRatio: false }} />
                                    )}
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                                        <span className="w-1.5 h-6 bg-sky-500 rounded-full mr-3"></span>
                                        {t('efficacy.clinical.findings')}
                                    </h4>
                                    <div className="space-y-4 mb-8">
                                        {activeData.findings.map((f, i) => (
                                            <div key={i} className="flex items-center p-3 hover:bg-slate-50 rounded-xl transition-colors">
                                                <div className="text-2xl font-black text-sky-500 mr-4 w-16">{f.val}</div>
                                                <div className="text-sm text-slate-600 font-medium">{f.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-slate-400 italic">
                                        {activeData.citation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety & Standards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                                {t('efficacy.safety.title')}
                            </h2>
                            <p className="text-slate-500 leading-relaxed mb-8">
                                {t('efficacy.safety.desc')}
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold shrink-0">1</div>
                                    <div>
                                        <div className="font-bold text-slate-900">{t('efficacy.safety.steps.intake.title')}</div>
                                        <div className="text-sm text-slate-500">{t('efficacy.safety.steps.intake.desc')}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold shrink-0">2</div>
                                    <div>
                                        <div className="font-bold text-slate-900">{t('efficacy.safety.steps.desalination.title')}</div>
                                        <div className="text-sm text-slate-500">{t('efficacy.safety.steps.desalination.desc')}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold shrink-0">3</div>
                                    <div>
                                        <div className="font-bold text-slate-900">{t('efficacy.safety.steps.modulation.title')}</div>
                                        <div className="text-sm text-slate-500">{t('efficacy.safety.steps.modulation.desc')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-slate-950 rounded-[40px] p-8 md:p-12 text-white overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 blur-[100px] -mr-32 -mt-32"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-10 flex items-center">
                                    <span className="mr-3">💧</span> {t('efficacy.safety.hardness.title')}
                                </h3>
                                <div className="grid gap-4 mb-10">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                                        <span className="text-slate-400">{t('efficacy.safety.hardness.soft')}</span>
                                        <span className="font-mono text-sky-400">0 ~ 50</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between items-center">
                                        <span className="text-slate-400">{t('efficacy.safety.hardness.moderate')}</span>
                                        <span className="font-mono text-sky-400">50 ~ 150</span>
                                    </div>
                                    <div className="bg-sky-500/10 border border-sky-500/30 rounded-2xl p-4 flex justify-between items-center">
                                        <span className="font-bold">{t('efficacy.safety.hardness.hard')} <span className="text-sky-400 font-normal ml-2">{t('efficacy.safety.hardness.dsw_main')}</span></span>
                                        <span className="font-mono text-sky-400 font-bold">300 ~ 1000+</span>
                                    </div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 text-center">
                                    <p className="text-sm text-slate-400 mb-2 uppercase tracking-widest font-bold">Calculation Formula</p>
                                    <p className="text-xl font-bold text-sky-400">{t('efficacy.safety.hardness.formula')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* References */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                        <span className="mr-3">📚</span> {t('efficacy.references')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-xs text-slate-500 leading-relaxed">
                        <p>• Kim, H. et al. (2020). "Impact of mineral-rich deep sea water on cardiovascular markers." Marine Drugs.</p>
                        <p>• Lee, S. (2021). "Clinical study on the decomposition of lactate after intake of DSW." Journal of Sports Science.</p>
                        <p>• Park, J. et al. (2019). "Anti-obesity effects of desalinated deep sea water in high-fat diet induced mice."</p>
                        <p>• WHO Guidelines for Drinking-water Quality (4th edition).</p>
                        <p>• Ministry of Oceans and Fisheries, Republic of Korea. "Act on Development and Utilization of Deep Sea Water."</p>
                        <p>• Research on Skin Barrier Improvement and Atopy by Deep Sea Minerals (Dermatology Inst. 2022).</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
