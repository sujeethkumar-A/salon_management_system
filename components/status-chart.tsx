'use client';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const data = [{name:'Booked',value:10},{name:'Confirmed',value:24},{name:'Completed',value:62},{name:'Cancelled',value:4}];
export function StatusChart(){return <div className="mt-8 h-56 w-full"><ResponsiveContainer width="100%" height="100%"><BarChart data={data} barSize={28}><CartesianGrid vertical={false} stroke="#e8e5df"/><XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize:11,fill:'#737875'}}/><YAxis hide/><Tooltip cursor={{fill:'#fbf8f3'}} contentStyle={{borderRadius:12,border:'1px solid #e8e5df',fontSize:12}}/><Bar dataKey="value" fill="#607b68" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer></div>}
