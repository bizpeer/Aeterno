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

const dataStore: Record<string, EfficacyData> = {
    cardio: {
        title: "심혈관 건강 개선 (Cardiovascular)",
        desc: "해양심층수에 풍부한 마그네슘과 칼륨은 혈관을 이완시키고 혈류 흐름을 개선하는 데 기여합니다. 연구에 따르면, 경도 800 이상의 DSW를 섭취한 그룹에서 총 콜레스테롤과 LDL 콜레스테롤 수치가 유의미하게 감소했습니다.",
        citation: "Ref: Kim et al. (2018), J. Med. Food.",
        findings: [
            { val: "↓ 18%", text: "고지방식이군 대비 총 콜레스테롤(TC) 18% 감소 확인." },
            { val: "↑ 12%", text: "혈액 순환 개선으로 인한 혈류 속도 증가." }
        ],
        chartType: 'line',
        chartData: {
            labels: ['0주', '2주', '4주', '6주', '8주'],
            datasets: [{
                label: 'LDL 콜레스테롤 수치 (mg/dL)',
                data: [160, 155, 142, 135, 128],
                borderColor: 'rgb(239, 68, 68)',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                tension: 0.3,
                fill: true
            }]
        }
    },
    metabolic: {
        title: "대사 질환 및 비만 관리 (Metabolic)",
        desc: "해양심층수의 미네랄은 지방 세포의 분화를 억제하고 지방 대사 효소(AMPK)를 활성화합니다. 동물 실험 결과 체중 증가 억제 및 백색 지방 조직의 감소가 관찰되었습니다.",
        citation: "Ref: Ha et al. (2014), Mar. Drugs.",
        findings: [
            { val: "↓ 7%", text: "대조군 대비 체중 증가율 7% 억제." },
            { val: "활성화", text: "지방 연소 효소 AMPK 발현 유의적 증가." }
        ],
        chartType: 'bar',
        chartData: {
            labels: ['일반수 섭취군', 'DSW 섭취군'],
            datasets: [{
                label: '지방 조직 중량 (g)',
                data: [4.5, 3.2],
                backgroundColor: ['rgba(148, 163, 184, 0.7)', 'rgba(14, 165, 233, 0.8)'],
                borderColor: ['rgb(148, 163, 184)', 'rgb(14, 165, 233)'],
                borderWidth: 1
            }]
        }
    },
    fatigue: {
        title: "운동 수행 능력 및 피로 회복 (Fatigue)",
        desc: "운동 후 축적되는 피로 물질인 젖산(Lactate)의 분해를 돕습니다. 탈염 해양심층수를 섭취한 운동 선수는 일반 물 섭취군보다 운동 후 회복 속도가 빨랐습니다.",
        citation: "Ref: Hou et al. (2013), J. Int. Soc. Sports Nutr.",
        findings: [
            { val: "-25%", text: "운동 직후 혈중 젖산 농도 25% 더 빠르게 감소." },
            { val: "Power", text: "운동 수행 능력(지구력) 소폭 상승 효과." }
        ],
        chartType: 'line',
        chartData: {
            labels: ['운동직후', '15분', '30분', '60분'],
            datasets: [
                {
                    label: '일반수 섭취',
                    data: [12, 10, 8, 6],
                    borderColor: 'rgb(148, 163, 184)',
                    borderDash: [5, 5],
                    tension: 0.3
                },
                {
                    label: 'DSW 섭취',
                    data: [12, 7.5, 4.2, 2.5],
                    borderColor: 'rgb(234, 179, 8)',
                    backgroundColor: 'rgba(234, 179, 8, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        }
    },
    skin: {
        title: "피부 건강 및 아토피 완화 (Dermatology)",
        desc: "해양심층수의 미네랄 밸런스는 피부 장벽 기능을 강화하고 염증 반응을 억제합니다. 아토피 피부염 환자를 대상으로 한 연구에서 피부 수분 함유량 증가와 가려움증 감소가 확인되었습니다.",
        citation: "Ref: Bak et al. (2012), Ann. Dermatol.",
        findings: [
            { val: "↑ 22%", text: "피부 수분 함유량 22% 증가." },
            { val: "감소", text: "IgE(면역글로불린 E) 수치 및 긁는 횟수 감소." }
        ],
        chartType: 'bar',
        chartData: {
            labels: ['섭취 전', '섭취 4주 후', '섭취 8주 후'],
            datasets: [{
                label: '피부 병변 점수 (SCORAD)',
                data: [45, 32, 24],
                backgroundColor: 'rgba(168, 85, 247, 0.7)',
                borderColor: 'rgb(168, 85, 247)',
                borderWidth: 1
            }]
        }
    }
};

const mineralData = {
    labels: ['마그네슘 (Mg)', '칼슘 (Ca)', '칼륨 (K)', '나트륨 (Na)'],
    datasets: [
        {
            label: '해양심층수 (Deep Sea Water)',
            data: [1200, 400, 300, 200],
            backgroundColor: 'rgba(14, 165, 233, 0.8)',
            borderColor: 'rgb(14, 165, 233)',
            borderWidth: 1
        },
        {
            label: '표층수 (Surface Water)',
            data: [130, 40, 38, 1050],
            backgroundColor: 'rgba(148, 163, 184, 0.5)',
            borderColor: 'rgb(148, 163, 184)',
            borderWidth: 1
        },
        {
            label: '일반 생수 (Mineral Water)',
            data: [20, 40, 5, 10],
            backgroundColor: 'rgba(203, 213, 225, 0.5)',
            borderColor: 'rgb(203, 213, 225)',
            borderWidth: 1
        }
    ]
};

export function ScientificEfficacy() {
    const [currentTab, setCurrentTab] = useState('cardio');
    const [mineralView, setMineralView] = useState('all');

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentEfficacy = dataStore[currentTab];

    const filteredMineralData = {
        ...mineralData,
        labels: mineralView === 'mg' ? ['마그네슘 (Mg)'] : mineralData.labels,
        datasets: mineralData.datasets.map(ds => ({
            ...ds,
            data: mineralView === 'mg' ? [ds.data[0]] : ds.data
        }))
    };

    return (
        <div className="bg-slate-50 text-slate-800 antialiased pt-20">
            {/* Hero Section */}
            <header id="intro" className="bg-gradient-to-br from-sky-900 via-sky-800 to-indigo-900 text-white pb-12 pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                먹는 해양심층수의<br />
                                과학적 효능과 임상적 가치
                            </h1>
                            <p className="text-sky-100 text-lg mb-6 leading-relaxed">
                                해양심층수(Deep Sea Water, DSW)는 태양광이 도달하지 않는 수심 200m 이하의 심해에 존재하는 고유수입니다.
                                본 리포트는 DSW의 독특한 미네랄 구성과 그것이 인체 대사, 심혈관 건강, 피로 회복에 미치는 과학적 메커니즘을
                                종합적으로 분석합니다.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                    <div className="text-2xl font-bold text-sky-300">2℃</div>
                                    <div className="text-sm text-sky-100">연중 저수온</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                    <div className="text-2xl font-bold text-sky-300">Mg:Ca</div>
                                    <div className="text-sm text-sky-100">이상적 비율 (3:1)</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                    <div className="text-2xl font-bold text-sky-300">Clean</div>
                                    <div className="text-sm text-sky-100">병원균 불검출</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
                            <h3 className="text-xl font-semibold mb-4 text-sky-200 border-b border-white/20 pb-2">연구 요약 (Abstract)</h3>
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                최근 임상 연구들은 탈염된 해양심층수 섭취가 혈중 지질 프로필 개선, 운동 후 젖산 분해 가속화, 그리고 아토피 피부염 증상 완화에 유의미한 효과가 있음을 시사합니다. 특히 마그네슘(Mg)을 비롯한 미량 미네랄의 높은 생체 이용률이 이러한 생리학적 이점의 핵심 기전으로 작용합니다.
                            </p>
                            <div className="flex justify-end">
                                <button onClick={() => scrollToSection('clinical')} className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition text-sm font-semibold shadow-lg">
                                    데이터 탐색 시작 &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mineral Analysis Section */}
            <section id="minerals" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <span className="text-sky-600 font-semibold tracking-wide uppercase text-sm">Component Analysis</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">독보적인 미네랄 조성 (Mineral Profile)</h2>
                        <p className="text-slate-600">
                            해양심층수는 표층수나 일반 생수와 달리 마그네슘, 칼슘, 칼륨 등 필수 미네랄이 풍부하며,
                            체액과 유사한 미네랄 밸런스를 가지고 있어 흡수가 빠릅니다. 아래 차트는 주요 수원별 미네랄 함량을 비교합니다.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-800 mb-3">핵심 성분 분석</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-0.5">Mg</span>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-slate-900">마그네슘 (Magnesium)</p>
                                            <p className="text-xs text-slate-500">효소 활성화, 에너지 대사 관여. DSW에 압도적으로 풍부.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-xs font-bold mt-0.5">Ca</span>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-slate-900">칼슘 (Calcium)</p>
                                            <p className="text-xs text-slate-500">뼈 건강 및 근육 수축 조절.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mt-0.5">K</span>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-slate-900">칼륨 (Potassium)</p>
                                            <p className="text-xs text-slate-500">혈압 유지 및 체내 수분 평형.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                <p className="text-sm text-blue-800 font-medium">💡 Insight</p>
                                <p className="text-xs text-blue-700 mt-1">
                                    해양심층수의 Mg:Ca 비율(약 3:1)은 인체 흡수에 최적화된 비율로 알려져 있습니다.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-bold text-slate-800">수원별 주요 미네랄 함량 비교 (mg/L)</h3>
                                <select
                                    value={mineralView}
                                    onChange={(e) => setMineralView(e.target.value)}
                                    className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block p-2"
                                >
                                    <option value="all">전체 비교 보기</option>
                                    <option value="mg">마그네슘 집중 분석</option>
                                </select>
                            </div>
                            <div className="h-[300px] md:h-[350px]">
                                <Bar
                                    data={filteredMineralData}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: { legend: { position: 'top' } },
                                        scales: { y: { beginAtZero: true, title: { display: true, text: '함량 (mg/L)' } } }
                                    }}
                                />
                            </div>
                            <p className="text-xs text-center text-slate-400 mt-4">*출처: Comparative Analysis of Mineral Content in DSW (2021)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Efficacy Dashboard */}
            <section id="clinical" className="py-16 bg-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-sky-600 font-semibold tracking-wide uppercase text-sm">Evidence Based</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">임상 효능 대시보드 (Clinical Efficacy)</h2>
                        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                            다양한 임상 시험 및 동물 실험을 통해 입증된 해양심층수의 4대 주요 효능을 확인해보세요.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
                            {[
                                { id: 'cardio', icon: '❤️', title: '심혈관 건강', sub: '혈압 및 혈류 개선' },
                                { id: 'metabolic', icon: '⚖️', title: '대사 질환', sub: '비만 및 당뇨 관리' },
                                { id: 'fatigue', icon: '⚡', title: '운동/피로', sub: '젖산 분해 가속' },
                                { id: 'skin', icon: '💧', title: '피부 건강', sub: '아토피 완화' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setCurrentTab(tab.id)}
                                    className={clsx(
                                        "flex-shrink-0 w-auto lg:w-full text-left px-5 py-4 rounded-xl font-medium transition-all shadow-sm border flex items-center gap-3",
                                        currentTab === tab.id
                                            ? "bg-sky-500 text-white border-transparent"
                                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                    )}
                                >
                                    <span className="text-xl">{tab.icon}</span>
                                    <div>
                                        <div className="font-bold">{tab.title}</div>
                                        <div className={clsx("text-xs font-normal", currentTab === tab.id ? "opacity-80" : "text-slate-500")}>{tab.sub}</div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="lg:col-span-9 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">{currentEfficacy.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{currentEfficacy.desc}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                    <h4 className="font-bold text-slate-700 mb-4 flex justify-between items-center">
                                        <span>📊 연구 데이터 시각화</span>
                                        <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-1 rounded">Interactive</span>
                                    </h4>
                                    <div className="h-[300px]">
                                        {currentEfficacy.chartType === 'line' ? (
                                            <Line
                                                data={currentEfficacy.chartData}
                                                options={{
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    plugins: { legend: { display: true } },
                                                    scales: { y: { beginAtZero: false } }
                                                }}
                                            />
                                        ) : (
                                            <Bar
                                                data={currentEfficacy.chartData}
                                                options={{
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    plugins: { legend: { display: true } },
                                                    scales: { y: { beginAtZero: true } }
                                                }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center">
                                    <h4 className="font-bold text-slate-700 mb-4">🔍 주요 연구 결과 (Key Findings)</h4>
                                    <ul className="space-y-4">
                                        {currentEfficacy.findings.map((finding, idx) => (
                                            <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 transition hover:shadow-md">
                                                <span className="text-sky-600 font-bold text-lg min-w-[60px] text-right">{finding.val}</span>
                                                <p className="text-sm text-slate-700 font-bold" dangerouslySetInnerHTML={{ __html: finding.text }} />
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 pt-4 border-t border-slate-100">
                                        <p className="text-xs text-slate-500 font-mono">{currentEfficacy.citation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety & Process Section */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">안전성 및 생산 공정</h2>
                            <p className="text-slate-600 mb-6">
                                먹는 해양심층수는 엄격한 법적 기준에 따라 취수, 탈염, 미네랄 조정 과정을 거칩니다.
                                특히 역삼투압(RO) 및 전기투석 방식을 통해 염분(NaCl)은 제거하고 유익한 미네랄(Mg, Ca, K)은 보존합니다.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">취수 (Intake)</h4>
                                        <p className="text-sm text-slate-500">수심 200m 이하 청정 해역에서 취수</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-slate-200 ml-6"></div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-xl font-bold text-sky-600">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">탈염 및 정제 (Desalination)</h4>
                                        <p className="text-sm text-slate-500">역삼투압 필터로 염분 제거 및 이물질 여과</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-slate-200 ml-6"></div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">미네랄 조정 (Modulation)</h4>
                                        <p className="text-sm text-slate-500">경도 조절 및 미네랄 밸런스 최적화</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">경도(Hardness)에 따른 분류</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-white rounded border border-slate-200 hover:border-sky-300 transition">
                                    <span className="font-medium text-slate-600">Soft Water (연수)</span>
                                    <span className="text-sky-600 font-bold">경도 0 ~ 50</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded border border-slate-200 hover:border-sky-300 transition">
                                    <span className="font-medium text-slate-600">Moderate (중경수)</span>
                                    <span className="text-sky-600 font-bold">경도 50 ~ 150</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-sky-50 rounded border border-sky-200 hover:border-sky-400 transition ring-1 ring-sky-200">
                                    <span className="font-medium text-slate-900">Hard Water (경수)</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sky-700 font-bold">경도 300 ~ 1000+</span>
                                        <span className="text-[10px] text-sky-500">(*DSW 주력 제품군)</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-4 text-center">
                                *경도 = (칼슘 함량 × 2.5) + (마그네슘 함량 × 4.1)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* References Section */}
            <section id="references" className="py-16 bg-slate-900 text-slate-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4">참고문헌 (References)</h2>
                    <div className="space-y-4 text-sm font-light font-serif">
                        <p className="pl-8 -indent-8">
                            Kim, Hee-Jin, and Chang-Keun Kim. "Effect of Deep Sea Water on Lipid Metabolism in High-Cholesterol Diet-Induced Hyperlipidemic Rats." <i>Journal of Medicinal Food</i> 21, no. 5 (2018): 455-63.
                        </p>
                        <p className="pl-8 -indent-8">
                            Lee, Dong-Heon. "Scientific Evidence for the Health Benefits of Deep Sea Water." <i>Journal of the Korean Society of Marine Environment & Safety</i> 21, no. 2 (2015): 201-9.
                        </p>
                        <p className="pl-8 -indent-8">
                            Miyamura, M., S. Yoshioka, and A. Hamada. "Difference between Deep Seawater and Surface Seawater in Mineral Components and Their Effects on Atopic Dermatitis-Like Skin Lesions in Mice." <i>Biological and Pharmaceutical Bulletin</i> 32, no. 6 (2009): 1091-97.
                        </p>
                        <p className="pl-8 -indent-8">
                            Yoshioka, S., A. Hamada, T. Cui, and J. Yokoyama. "Pharmacological Activity of Deep-Sea Water: Examination of Hyperlipemia Prevention and Medical Treatment Effect." <i>Biological and Pharmaceutical Bulletin</i> 26, no. 11 (2003): 1552-59.
                        </p>
                        <p className="pl-8 -indent-8">
                            Ministry of Oceans and Fisheries. "Annual Report on the Development of Deep Sea Water Industry." Sejong: Ministry of Oceans and Fisheries, 2022.
                        </p>
                    </div>
                    <div className="mt-10 text-center text-xs text-slate-500">
                        <p>&copy; 2023 DSW Research Synthesis. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
