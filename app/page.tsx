'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, Heart, Apple, Timer, Flame, Trophy,
  Target, Users, CheckCircle, ArrowRight, Star,
  Play, Calendar, Zap, TrendingUp
} from 'lucide-react';

const programs = [
  { id: 'strength', name: 'Strength Training', icon: Dumbbell, duration: '8 weeks', level: 'All Levels', color: 'from-red-500 to-orange-600' },
  { id: 'cardio', name: 'Cardio Blast', icon: Heart, duration: '6 weeks', level: 'Intermediate', color: 'from-pink-500 to-rose-600' },
  { id: 'hiit', name: 'HIIT Challenge', icon: Flame, duration: '4 weeks', level: 'Advanced', color: 'from-amber-500 to-red-600' },
  { id: 'yoga', name: 'Yoga & Flexibility', icon: Target, duration: '8 weeks', level: 'Beginner', color: 'from-purple-500 to-indigo-600' },
];

const features = [
  { icon: Calendar, title: 'Custom Workout Plans', desc: 'AI-generated plans tailored to your goals and schedule' },
  { icon: Apple, title: 'Nutrition Tracking', desc: 'Log meals and track macros with our food database' },
  { icon: TrendingUp, title: 'Progress Analytics', desc: 'Visualize your gains with detailed charts and insights' },
  { icon: Users, title: 'Community Support', desc: 'Connect with others on the same fitness journey' },
];

const stats = [
  { value: '500+', label: 'Workout Videos' },
  { value: '100K+', label: 'Active Members' },
  { value: '10M+', label: 'Workouts Completed' },
  { value: '4.9/5', label: 'App Rating' },
];

const testimonials = [
  { name: 'Mike R.', result: 'Lost 30 lbs', quote: 'The personalized plans made all the difference!' },
  { name: 'Sarah T.', result: 'Ran first marathon', quote: 'From couch to marathon in 6 months.' },
  { name: 'James L.', result: 'Gained 15 lbs muscle', quote: 'Best strength program I have ever tried.' },
];

export default function FitnessPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Fitness</span>
                <span className="text-red-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#programs" className="text-gray-300 hover:text-white transition">Programs</a>
              <a href="#nutrition" className="text-gray-300 hover:text-white transition">Nutrition</a>
              <a href="#community" className="text-gray-300 hover:text-white transition">Community</a>
              <a href="#start" className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-sm text-red-300 mb-8"
          >
            <Zap className="w-4 h-4" />
            <span>AI-powered personalized fitness</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Transform Your Body<br/>
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Achieve Your Goals
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Personalized workout plans, nutrition tracking, and expert guidance. 
            Your fitness journey starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#start" className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#programs" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Training Programs</h2>
            <p className="text-xl text-gray-400">Choose your path to fitness success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.button
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProgram(program.id)}
                className={`p-6 bg-white/5 border rounded-xl text-left transition-all hover:scale-105 ${
                  selectedProgram === program.id ? 'border-red-500 bg-red-500/10' : 'border-white/10'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${program.color} mb-4`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{program.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Timer className="w-4 h-4" />
                  <span>{program.duration}</span>
                  <span>•</span>
                  <span>{program.level}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-900/50 border border-white/10 rounded-xl text-center"
              >
                <feature.icon className="w-10 h-10 text-red-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="text-red-400 font-medium">{t.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform?</h2>
          <p className="text-xl text-gray-300 mb-8">Start your 7-day free trial today. No credit card required.</p>
          <a href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 font-semibold rounded-xl hover:bg-gray-100 transition">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-red-400" />
              <span className="text-white font-semibold">Javari Fitness</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
